export type CardCategory =
  | 'platform-core'
  | 'ai-intelligence'
  | 'strategic-concepts'
  | 'customer-success'
  | 'solutions-products'
  | 'technical-differentiators';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface CardDefinition {
  short: string;
  detailed: string;
  useCases: string[];
  relatedTerms: string[];
}

export interface Card {
  id: string;
  term: string;
  tabooWords: string[];
  category: CardCategory;
  difficulty: Difficulty;
  definition: CardDefinition;
}

export interface Player {
  id: string;
  name: string;
  score: number;
  isDescriber: boolean;
}

export interface Team {
  id: string;
  name: string;
  players: Player[];
  score: number;
}

export interface RoundResult {
  cardId: string;
  term: string;
  outcome: 'correct' | 'passed' | 'skipped' | 'timeout';
  timeSpent: number;
}

export interface GameSettings {
  timerDuration: number;
  categories: CardCategory[];
  difficulty: Difficulty | 'all';
  cardsPerRound: number;
}

export interface GameState {
  status: 'setup' | 'playing' | 'round-end' | 'game-end';
  currentTeamIndex: number;
  currentCardIndex: number;
  roundNumber: number;
  teams: Team[];
  settings: GameSettings;
  deck: Card[];
  currentRoundResults: RoundResult[];
  allRoundResults: RoundResult[];
}

export const DEFAULT_SETTINGS: GameSettings = {
  timerDuration: 60,
  categories: [
    'platform-core',
    'ai-intelligence',
    'strategic-concepts',
    'customer-success',
    'solutions-products',
    'technical-differentiators',
  ],
  difficulty: 'all',
  cardsPerRound: 10,
};

export const CATEGORY_LABELS: Record<CardCategory, string> = {
  'platform-core': 'Platform Core',
  'ai-intelligence': 'AI & Intelligence',
  'strategic-concepts': 'Strategic Concepts',
  'customer-success': 'Customer Success',
  'solutions-products': 'Solutions & Products',
  'technical-differentiators': 'Technical Differentiators',
};

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};
