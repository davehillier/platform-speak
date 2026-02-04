'use client';

import { Card, CATEGORY_LABELS, DIFFICULTY_LABELS } from '@/types/game';
import { X } from 'lucide-react';

interface GameCardProps {
  card: Card;
  showCategory?: boolean;
}

export function GameCard({ card, showCategory = false }: GameCardProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header with category */}
        {showCategory && (
          <div className="bg-black/20 px-6 py-3 flex justify-between items-center">
            <span className="text-white/80 text-sm font-medium">
              {CATEGORY_LABELS[card.category]}
            </span>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                card.difficulty === 'easy'
                  ? 'bg-green-500 text-white'
                  : card.difficulty === 'medium'
                  ? 'bg-yellow-500 text-black'
                  : 'bg-red-500 text-white'
              }`}
            >
              {DIFFICULTY_LABELS[card.difficulty]}
            </span>
          </div>
        )}

        {/* Main term */}
        <div className="px-8 py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight">
            {card.term}
          </h1>
        </div>

        {/* Taboo words section */}
        <div className="bg-white/10 backdrop-blur-sm px-6 py-6">
          <p className="text-white/60 text-xs uppercase tracking-wider mb-4 text-center font-semibold">
            Do not say
          </p>
          <div className="space-y-2">
            {card.tabooWords.map((word, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 bg-red-500/20 rounded-lg py-2 px-4"
              >
                <X className="w-4 h-4 text-red-400" />
                <span className="text-white font-medium text-lg">{word}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
