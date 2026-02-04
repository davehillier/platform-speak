'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Trophy, Users } from 'lucide-react';
import { GameCard } from '@/components/game/GameCard';
import { Timer } from '@/components/game/Timer';
import { ActionButtons } from '@/components/game/ActionButtons';
import { RoundSummary } from '@/components/game/RoundSummary';
import { useGameState } from '@/hooks/useGameState';
import { Team, GameSettings, Card } from '@/types/game';
import { cards as allCards } from '@/data/cards';

type GamePhase = 'ready' | 'playing' | 'round-end' | 'game-end';

export default function GamePage() {
  const router = useRouter();
  const { state, currentCard, currentTeam, isOutOfCards, actions } = useGameState();
  const [phase, setPhase] = useState<GamePhase>('ready');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [roundStartTime, setRoundStartTime] = useState<number>(0);
  const [cardStartTime, setCardStartTime] = useState<number>(0);
  const [initialized, setInitialized] = useState(false);

  // Initialize game from session storage
  useEffect(() => {
    if (initialized) return;

    const storedTeams = sessionStorage.getItem('gameTeams');
    const storedSettings = sessionStorage.getItem('gameSettings');

    if (!storedTeams || !storedSettings) {
      router.push('/play');
      return;
    }

    try {
      const teams: Team[] = JSON.parse(storedTeams);
      const settings: GameSettings = JSON.parse(storedSettings);
      actions.startGame(teams, settings);
      setInitialized(true);
    } catch (e) {
      router.push('/play');
    }
  }, [router, actions, initialized]);

  const startRound = useCallback(() => {
    setPhase('playing');
    setIsTimerRunning(true);
    setRoundStartTime(Date.now());
    setCardStartTime(Date.now());
  }, []);

  const getTimeSpent = useCallback(() => {
    return Math.floor((Date.now() - cardStartTime) / 1000);
  }, [cardStartTime]);

  const handleCorrect = useCallback(() => {
    actions.markCorrect(getTimeSpent());
    setCardStartTime(Date.now());
  }, [actions, getTimeSpent]);

  const handlePass = useCallback(() => {
    actions.markPassed(getTimeSpent());
    setCardStartTime(Date.now());
  }, [actions, getTimeSpent]);

  const handleSkip = useCallback(() => {
    actions.markSkipped(getTimeSpent());
    setCardStartTime(Date.now());
  }, [actions, getTimeSpent]);

  const handleTimeUp = useCallback(() => {
    setIsTimerRunning(false);
    actions.timeUp();
    setPhase('round-end');
  }, [actions]);

  const handleContinue = useCallback(() => {
    if (isOutOfCards) {
      setPhase('game-end');
      actions.endGame();
    } else {
      actions.nextTeam();
      setPhase('ready');
    }
  }, [actions, isOutOfCards]);

  const handleEndGame = useCallback(() => {
    setPhase('game-end');
    actions.endGame();
  }, [actions]);

  const handlePlayAgain = useCallback(() => {
    router.push('/play');
  }, [router]);

  // Check for out of cards during play
  useEffect(() => {
    if (phase === 'playing' && isOutOfCards) {
      setIsTimerRunning(false);
      actions.endRound();
      setPhase('round-end');
    }
  }, [phase, isOutOfCards, actions]);

  if (!initialized || !currentTeam) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </main>
    );
  }

  // Ready phase - show current team and start button
  if (phase === 'ready') {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {currentTeam.name}
          </h1>
          <p className="text-white/60 mb-2">Round {state.roundNumber}</p>
          <p className="text-white/40 text-sm mb-8">
            Pass the phone to the describer
          </p>

          {/* Scoreboard */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 mb-8 w-full max-w-xs mx-auto">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Current Scores</p>
            <div className="space-y-2">
              {state.teams.map((team, idx) => (
                <div
                  key={team.id}
                  className={`flex justify-between items-center p-2 rounded-lg ${
                    idx === state.currentTeamIndex ? 'bg-indigo-500/30' : ''
                  }`}
                >
                  <span className="text-white">{team.name}</span>
                  <span className="text-white font-bold">{team.score}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={startRound}
            className="w-full max-w-xs py-5 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-xl rounded-2xl transition-all active:scale-98 shadow-lg"
          >
            Start Round
          </button>
        </div>
      </main>
    );
  }

  // Playing phase
  if (phase === 'playing' && currentCard) {
    return (
      <main className="min-h-screen flex flex-col p-6">
        {/* Header with timer and score */}
        <div className="flex justify-between items-start mb-6">
          <div className="text-left">
            <p className="text-white/60 text-sm">{currentTeam.name}</p>
            <p className="text-white font-bold text-2xl">
              {state.currentRoundResults.filter((r) => r.outcome === 'correct').length} pts
            </p>
          </div>
          <Timer
            duration={state.settings.timerDuration}
            isRunning={isTimerRunning}
            onComplete={handleTimeUp}
          />
          <div className="text-right">
            <p className="text-white/60 text-sm">Cards left</p>
            <p className="text-white font-bold text-2xl">
              {state.deck.length - state.currentCardIndex}
            </p>
          </div>
        </div>

        {/* Game card */}
        <div className="flex-1 flex items-center justify-center mb-6">
          <div key={currentCard.id} className="animate-fade-in w-full">
            <GameCard card={currentCard} showCategory />
          </div>
        </div>

        {/* Action buttons */}
        <ActionButtons
          onCorrect={handleCorrect}
          onPass={handlePass}
          onSkip={handleSkip}
          disabled={!isTimerRunning}
        />
      </main>
    );
  }

  // Round end phase
  if (phase === 'round-end') {
    return (
      <main className="min-h-screen p-6 overflow-auto">
        <RoundSummary
          results={state.currentRoundResults}
          cards={allCards}
          teamName={currentTeam.name}
          score={state.currentRoundResults.filter((r) => r.outcome === 'correct').length}
          onContinue={handleContinue}
          onEndGame={handleEndGame}
          isLastRound={isOutOfCards}
        />
      </main>
    );
  }

  // Game end phase
  if (phase === 'game-end') {
    const sortedTeams = [...state.teams].sort((a, b) => b.score - a.score);
    const winner = sortedTeams[0];

    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 mb-6 animate-pulse-glow">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Game Over!</h1>
          <p className="text-white/60 mb-8">
            {winner.name} wins with {winner.score} points!
          </p>

          {/* Final scores */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 w-full max-w-sm mx-auto">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-4">Final Scores</p>
            <div className="space-y-3">
              {sortedTeams.map((team, idx) => (
                <div
                  key={team.id}
                  className={`flex justify-between items-center p-3 rounded-xl ${
                    idx === 0 ? 'bg-yellow-500/20 border border-yellow-500/50' : 'bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
                        idx === 0 ? 'bg-yellow-500 text-black' : 'bg-white/20 text-white'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-white font-medium">{team.name}</span>
                  </div>
                  <span className="text-white font-bold text-xl">{team.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 w-full max-w-sm mx-auto">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-4">Game Stats</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-green-400 font-bold text-2xl">
                  {state.allRoundResults.filter((r) => r.outcome === 'correct').length}
                </p>
                <p className="text-white/50 text-xs">Correct</p>
              </div>
              <div>
                <p className="text-yellow-400 font-bold text-2xl">
                  {state.allRoundResults.filter((r) => r.outcome === 'passed').length}
                </p>
                <p className="text-white/50 text-xs">Passed</p>
              </div>
              <div>
                <p className="text-red-400 font-bold text-2xl">
                  {state.allRoundResults.filter((r) => r.outcome === 'skipped').length}
                </p>
                <p className="text-white/50 text-xs">Skipped</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 w-full max-w-sm mx-auto">
            <Link
              href="/"
              className="flex-1 py-4 px-6 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all text-center"
            >
              Home
            </Link>
            <button
              onClick={handlePlayAgain}
              className="flex-1 py-4 px-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all"
            >
              Play Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  return null;
}
