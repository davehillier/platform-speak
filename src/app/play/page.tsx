'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Users, Clock, Filter, Play, Plus, Minus } from 'lucide-react';
import { CATEGORY_LABELS, DIFFICULTY_LABELS, CardCategory, Difficulty, Team, GameSettings, DEFAULT_SETTINGS } from '@/types/game';
import { cards } from '@/data/cards';

export default function PlaySetup() {
  const router = useRouter();
  const [teamCount, setTeamCount] = useState(2);
  const [teamNames, setTeamNames] = useState(['Team 1', 'Team 2', 'Team 3', 'Team 4']);
  const [timerDuration, setTimerDuration] = useState(60);
  const [selectedCategories, setSelectedCategories] = useState<CardCategory[]>([
    'platform-core',
    'ai-intelligence',
    'strategic-concepts',
    'customer-success',
    'solutions-products',
    'technical-differentiators',
  ]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');

  const toggleCategory = (category: CardCategory) => {
    if (selectedCategories.includes(category)) {
      if (selectedCategories.length > 1) {
        setSelectedCategories(selectedCategories.filter((c) => c !== category));
      }
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const availableCards = cards.filter((card) => {
    const categoryMatch = selectedCategories.includes(card.category);
    const difficultyMatch = selectedDifficulty === 'all' || card.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const startGame = () => {
    const teams: Team[] = Array.from({ length: teamCount }, (_, i) => ({
      id: `team-${i}`,
      name: teamNames[i],
      players: [],
      score: 0,
    }));

    const settings: GameSettings = {
      timerDuration,
      categories: selectedCategories,
      difficulty: selectedDifficulty,
      cardsPerRound: 10,
    };

    // Store settings in sessionStorage for the game page
    sessionStorage.setItem('gameTeams', JSON.stringify(teams));
    sessionStorage.setItem('gameSettings', JSON.stringify(settings));

    router.push('/play/local/game');
  };

  return (
    <main className="min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/"
          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </Link>
        <h1 className="text-2xl font-bold text-white">Game Setup</h1>
      </div>

      <div className="max-w-lg mx-auto space-y-6">
        {/* Teams */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-indigo-400" />
            <h2 className="text-white font-semibold">Teams</h2>
          </div>

          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={() => setTeamCount(Math.max(2, teamCount - 1))}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50"
              disabled={teamCount <= 2}
            >
              <Minus className="w-5 h-5 text-white" />
            </button>
            <span className="text-3xl font-bold text-white w-12 text-center">{teamCount}</span>
            <button
              onClick={() => setTeamCount(Math.min(4, teamCount + 1))}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50"
              disabled={teamCount >= 4}
            >
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="space-y-2">
            {Array.from({ length: teamCount }, (_, i) => (
              <input
                key={i}
                type="text"
                value={teamNames[i]}
                onChange={(e) => {
                  const newNames = [...teamNames];
                  newNames[i] = e.target.value;
                  setTeamNames(newNames);
                }}
                className="w-full px-4 py-3 bg-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={`Team ${i + 1} name`}
              />
            ))}
          </div>
        </section>

        {/* Timer */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-indigo-400" />
            <h2 className="text-white font-semibold">Round Timer</h2>
          </div>

          <div className="flex gap-2">
            {[30, 45, 60, 90].map((duration) => (
              <button
                key={duration}
                onClick={() => setTimerDuration(duration)}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  timerDuration === duration
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {duration}s
              </button>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-indigo-400" />
            <h2 className="text-white font-semibold">Categories</h2>
          </div>

          <div className="space-y-2">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
              const category = key as CardCategory;
              const count = cards.filter((c) => c.category === category).length;
              const isSelected = selectedCategories.includes(category);

              return (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                    isSelected
                      ? 'bg-indigo-500/30 border border-indigo-500'
                      : 'bg-white/5 border border-transparent hover:bg-white/10'
                  }`}
                >
                  <span className="text-white font-medium">{label}</span>
                  <span className="text-white/50 text-sm">{count} cards</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Difficulty */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-4">Difficulty</h2>

          <div className="flex gap-2">
            <button
              onClick={() => setSelectedDifficulty('all')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                selectedDifficulty === 'all'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              All
            </button>
            {Object.entries(DIFFICULTY_LABELS).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedDifficulty(key as Difficulty)}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  selectedDifficulty === key
                    ? key === 'easy'
                      ? 'bg-green-500 text-white'
                      : key === 'medium'
                      ? 'bg-yellow-500 text-black'
                      : 'bg-red-500 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Card count info */}
        <div className="text-center text-white/60">
          <p>{availableCards.length} cards selected</p>
        </div>

        {/* Start button */}
        <button
          onClick={startGame}
          disabled={availableCards.length < 5}
          className="w-full flex items-center justify-center gap-3 py-5 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-xl rounded-2xl transition-all active:scale-98 shadow-lg"
        >
          <Play className="w-6 h-6" />
          Start Game
        </button>
      </div>
    </main>
  );
}
