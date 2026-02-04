'use client';

import { useReducer, useCallback } from 'react';
import { GameState, GameSettings, Team, RoundResult, Card, DEFAULT_SETTINGS } from '@/types/game';
import { cards, filterCards } from '@/data/cards';

type GameAction =
  | { type: 'START_GAME'; payload: { teams: Team[]; settings: GameSettings } }
  | { type: 'START_ROUND' }
  | { type: 'MARK_CORRECT'; payload: { timeSpent: number } }
  | { type: 'MARK_PASSED'; payload: { timeSpent: number } }
  | { type: 'MARK_SKIPPED'; payload: { timeSpent: number } }
  | { type: 'TIME_UP' }
  | { type: 'END_ROUND' }
  | { type: 'NEXT_TEAM' }
  | { type: 'END_GAME' }
  | { type: 'RESET' };

const initialState: GameState = {
  status: 'setup',
  currentTeamIndex: 0,
  currentCardIndex: 0,
  roundNumber: 1,
  teams: [],
  settings: DEFAULT_SETTINGS,
  deck: [],
  currentRoundResults: [],
  allRoundResults: [],
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME': {
      const { teams, settings } = action.payload;
      const filteredDeck = filterCards(settings.categories, settings.difficulty);
      return {
        ...state,
        status: 'playing',
        teams,
        settings,
        deck: filteredDeck,
        currentTeamIndex: 0,
        currentCardIndex: 0,
        roundNumber: 1,
        currentRoundResults: [],
        allRoundResults: [],
      };
    }

    case 'START_ROUND':
      return {
        ...state,
        status: 'playing',
        currentRoundResults: [],
      };

    case 'MARK_CORRECT': {
      const currentCard = state.deck[state.currentCardIndex];
      const result: RoundResult = {
        cardId: currentCard.id,
        term: currentCard.term,
        outcome: 'correct',
        timeSpent: action.payload.timeSpent,
      };
      const updatedTeams = state.teams.map((team, idx) =>
        idx === state.currentTeamIndex ? { ...team, score: team.score + 1 } : team
      );
      return {
        ...state,
        teams: updatedTeams,
        currentRoundResults: [...state.currentRoundResults, result],
        currentCardIndex: state.currentCardIndex + 1,
      };
    }

    case 'MARK_PASSED': {
      const currentCard = state.deck[state.currentCardIndex];
      const result: RoundResult = {
        cardId: currentCard.id,
        term: currentCard.term,
        outcome: 'passed',
        timeSpent: action.payload.timeSpent,
      };
      return {
        ...state,
        currentRoundResults: [...state.currentRoundResults, result],
        currentCardIndex: state.currentCardIndex + 1,
      };
    }

    case 'MARK_SKIPPED': {
      const currentCard = state.deck[state.currentCardIndex];
      const result: RoundResult = {
        cardId: currentCard.id,
        term: currentCard.term,
        outcome: 'skipped',
        timeSpent: action.payload.timeSpent,
      };
      return {
        ...state,
        currentRoundResults: [...state.currentRoundResults, result],
        currentCardIndex: state.currentCardIndex + 1,
      };
    }

    case 'TIME_UP': {
      const currentCard = state.deck[state.currentCardIndex];
      const result: RoundResult = {
        cardId: currentCard.id,
        term: currentCard.term,
        outcome: 'timeout',
        timeSpent: state.settings.timerDuration,
      };
      return {
        ...state,
        status: 'round-end',
        currentRoundResults: [...state.currentRoundResults, result],
        allRoundResults: [...state.allRoundResults, ...state.currentRoundResults, result],
      };
    }

    case 'END_ROUND':
      return {
        ...state,
        status: 'round-end',
        allRoundResults: [...state.allRoundResults, ...state.currentRoundResults],
      };

    case 'NEXT_TEAM': {
      const nextTeamIndex = (state.currentTeamIndex + 1) % state.teams.length;
      const isNewRound = nextTeamIndex === 0;
      return {
        ...state,
        status: 'playing',
        currentTeamIndex: nextTeamIndex,
        roundNumber: isNewRound ? state.roundNumber + 1 : state.roundNumber,
        currentRoundResults: [],
      };
    }

    case 'END_GAME':
      return {
        ...state,
        status: 'game-end',
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const startGame = useCallback((teams: Team[], settings: GameSettings) => {
    dispatch({ type: 'START_GAME', payload: { teams, settings } });
  }, []);

  const startRound = useCallback(() => {
    dispatch({ type: 'START_ROUND' });
  }, []);

  const markCorrect = useCallback((timeSpent: number) => {
    dispatch({ type: 'MARK_CORRECT', payload: { timeSpent } });
  }, []);

  const markPassed = useCallback((timeSpent: number) => {
    dispatch({ type: 'MARK_PASSED', payload: { timeSpent } });
  }, []);

  const markSkipped = useCallback((timeSpent: number) => {
    dispatch({ type: 'MARK_SKIPPED', payload: { timeSpent } });
  }, []);

  const timeUp = useCallback(() => {
    dispatch({ type: 'TIME_UP' });
  }, []);

  const endRound = useCallback(() => {
    dispatch({ type: 'END_ROUND' });
  }, []);

  const nextTeam = useCallback(() => {
    dispatch({ type: 'NEXT_TEAM' });
  }, []);

  const endGame = useCallback(() => {
    dispatch({ type: 'END_GAME' });
  }, []);

  const resetGame = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const currentCard: Card | null =
    state.deck.length > 0 && state.currentCardIndex < state.deck.length
      ? state.deck[state.currentCardIndex]
      : null;

  const currentTeam: Team | null =
    state.teams.length > 0 ? state.teams[state.currentTeamIndex] : null;

  const isOutOfCards = state.currentCardIndex >= state.deck.length;

  return {
    state,
    currentCard,
    currentTeam,
    isOutOfCards,
    actions: {
      startGame,
      startRound,
      markCorrect,
      markPassed,
      markSkipped,
      timeUp,
      endRound,
      nextTeam,
      endGame,
      resetGame,
    },
  };
}
