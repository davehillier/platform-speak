'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';
import { cards } from '@/data/cards';
import { CATEGORY_LABELS, DIFFICULTY_LABELS, CardCategory, Difficulty, Card } from '@/types/game';

export default function LearnPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CardCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCards = cards.filter((card) => {
    const matchesSearch =
      card.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.definition.short.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || card.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-black';
      case 'hard':
        return 'bg-red-500 text-white';
    }
  };

  return (
    <main className="min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/"
          className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </Link>
        <h1 className="text-2xl font-bold text-white">Learn Mode</h1>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search terms..."
          className="w-full pl-12 pr-4 py-3 bg-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Filter toggle */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 text-white/60 hover:text-white mb-4 transition-colors"
      >
        <Filter className="w-4 h-4" />
        <span className="text-sm">
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </span>
        {showFilters ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {/* Filters */}
      {showFilters && (
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 mb-6 animate-fade-in">
          <div className="mb-4">
            <p className="text-white/60 text-sm mb-2">Category</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                All
              </button>
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key as CardCategory)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === key
                      ? 'bg-indigo-500 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white/60 text-sm mb-2">Difficulty</p>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedDifficulty('all')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
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
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedDifficulty === key
                      ? getDifficultyColor(key as Difficulty)
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results count */}
      <p className="text-white/40 text-sm mb-4">
        {filteredCards.length} of {cards.length} terms
      </p>

      {/* Cards list */}
      <div className="space-y-3">
        {filteredCards.map((card) => {
          const isExpanded = expandedCard === card.id;

          return (
            <div
              key={card.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedCard(isExpanded ? null : card.id)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold">{card.term}</h3>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${getDifficultyColor(
                        card.difficulty
                      )}`}
                    >
                      {DIFFICULTY_LABELS[card.difficulty]}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm">
                    {CATEGORY_LABELS[card.category]}
                  </p>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-white/40 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white/40 flex-shrink-0" />
                )}
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 border-t border-white/10 animate-fade-in">
                  {/* Definition */}
                  <div className="mt-4">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                      Definition
                    </p>
                    <p className="text-white/90 leading-relaxed">
                      {card.definition.short}
                    </p>
                  </div>

                  {/* Detailed explanation */}
                  <div className="mt-4">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                      Detailed Explanation
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {card.definition.detailed}
                    </p>
                  </div>

                  {/* Taboo words */}
                  <div className="mt-4">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                      Taboo Words (Don&apos;t Say)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {card.tabooWords.map((word, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use cases */}
                  {card.definition.useCases.length > 0 && (
                    <div className="mt-4">
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                        Use Cases
                      </p>
                      <ul className="space-y-1">
                        {card.definition.useCases.map((useCase, idx) => (
                          <li
                            key={idx}
                            className="text-white/70 text-sm flex items-start gap-2"
                          >
                            <span className="text-indigo-400">•</span>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Related terms */}
                  {card.definition.relatedTerms.length > 0 && (
                    <div className="mt-4">
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                        Related Terms
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {card.definition.relatedTerms.map((term, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm"
                          >
                            {term}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredCards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/40">No terms found matching your search.</p>
        </div>
      )}
    </main>
  );
}
