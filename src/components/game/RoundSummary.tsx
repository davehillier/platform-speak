'use client';

import { useState } from 'react';
import { RoundResult, Card } from '@/types/game';
import { Check, X, SkipForward, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface RoundSummaryProps {
  results: RoundResult[];
  cards: Card[];
  teamName: string;
  score: number;
  onContinue: () => void;
  onEndGame: () => void;
  isLastRound?: boolean;
}

export function RoundSummary({
  results,
  cards,
  teamName,
  score,
  onContinue,
  onEndGame,
  isLastRound = false,
}: RoundSummaryProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const correctCount = results.filter((r) => r.outcome === 'correct').length;
  const passedCount = results.filter((r) => r.outcome === 'passed').length;
  const skippedCount = results.filter((r) => r.outcome === 'skipped').length;
  const timedOutCount = results.filter((r) => r.outcome === 'timeout').length;

  const getCardById = (id: string) => cards.find((c) => c.id === id);

  const getOutcomeIcon = (outcome: RoundResult['outcome']) => {
    switch (outcome) {
      case 'correct':
        return <Check className="w-5 h-5 text-green-500" />;
      case 'passed':
        return <SkipForward className="w-5 h-5 text-yellow-500" />;
      case 'skipped':
        return <X className="w-5 h-5 text-red-500" />;
      case 'timeout':
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getOutcomeColor = (outcome: RoundResult['outcome']) => {
    switch (outcome) {
      case 'correct':
        return 'border-green-500 bg-green-500/10';
      case 'passed':
        return 'border-yellow-500 bg-yellow-500/10';
      case 'skipped':
        return 'border-red-500 bg-red-500/10';
      case 'timeout':
        return 'border-gray-500 bg-gray-500/10';
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Round Complete!</h2>
        <p className="text-white/70">{teamName}</p>
      </div>

      {/* Score summary */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
        <div className="text-center mb-4">
          <p className="text-white/60 text-sm uppercase tracking-wider">Points This Round</p>
          <p className="text-5xl font-bold text-white">{correctCount}</p>
        </div>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-green-400 font-bold text-xl">{correctCount}</p>
            <p className="text-white/60 text-xs">Correct</p>
          </div>
          <div>
            <p className="text-yellow-400 font-bold text-xl">{passedCount}</p>
            <p className="text-white/60 text-xs">Passed</p>
          </div>
          <div>
            <p className="text-red-400 font-bold text-xl">{skippedCount}</p>
            <p className="text-white/60 text-xs">Skipped</p>
          </div>
          <div>
            <p className="text-gray-400 font-bold text-xl">{timedOutCount}</p>
            <p className="text-white/60 text-xs">Timeout</p>
          </div>
        </div>
      </div>

      {/* Card results with definitions */}
      <div className="mb-8">
        <h3 className="text-white/80 font-semibold mb-4">Review Definitions</h3>
        <div className="space-y-3">
          {results.map((result, index) => {
            const card = getCardById(result.cardId);
            if (!card) return null;
            const uniqueKey = `${result.cardId}-${index}`;
            const isExpanded = expandedCard === uniqueKey;

            return (
              <div
                key={uniqueKey}
                className={`border-l-4 rounded-r-xl ${getOutcomeColor(result.outcome)} overflow-hidden`}
              >
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : uniqueKey)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    {getOutcomeIcon(result.outcome)}
                    <span className="text-white font-medium">{result.term}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-white/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  )}
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 border-t border-white/10">
                    <p className="text-white/80 text-sm mt-3 leading-relaxed">
                      {card.definition.short}
                    </p>
                    {card.definition.useCases.length > 0 && (
                      <div className="mt-3">
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                          Use Cases
                        </p>
                        <ul className="text-white/70 text-sm space-y-1">
                          {card.definition.useCases.map((useCase, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-white/40">•</span>
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4">
        <button
          onClick={onEndGame}
          className="flex-1 py-4 px-6 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all"
        >
          End Game
        </button>
        <button
          onClick={onContinue}
          className="flex-1 py-4 px-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all"
        >
          {isLastRound ? 'See Final Scores' : 'Next Round'}
        </button>
      </div>
    </div>
  );
}
