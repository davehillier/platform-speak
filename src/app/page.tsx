'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, BookOpen, Users, Settings, Sparkles } from 'lucide-react';
import { cards } from '@/data/cards';
import { CATEGORY_LABELS, CardCategory } from '@/types/game';

export default function Home() {
  const categoryStats = Object.entries(CATEGORY_LABELS).map(([key, label]) => ({
    category: key as CardCategory,
    label,
    count: cards.filter((c) => c.category === key).length,
  }));

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Logo and title */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 shadow-lg animate-pulse-glow">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Platform Speak
        </h1>
        <p className="text-white/60 text-lg max-w-md">
          Learn Appian terminology through the power of play
        </p>
      </div>

      {/* Main actions */}
      <div className="w-full max-w-md space-y-4 animate-slide-up">
        <Link
          href="/play"
          className="flex items-center justify-center gap-3 w-full py-5 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-xl rounded-2xl transition-all active:scale-98 shadow-lg hover:shadow-xl"
        >
          <Play className="w-6 h-6" />
          Start Game
        </Link>

        <Link
          href="/learn"
          className="flex items-center justify-center gap-3 w-full py-4 px-8 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-2xl transition-all active:scale-98"
        >
          <BookOpen className="w-5 h-5" />
          Learn Mode
        </Link>
      </div>

      {/* Stats */}
      <div className="mt-12 w-full max-w-md animate-slide-up" style={{ animationDelay: '100ms' }}>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
          <h2 className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-4">
            {cards.length} Cards Available
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {categoryStats.map((stat) => (
              <div
                key={stat.category}
                className="bg-white/5 rounded-xl p-3 text-center"
              >
                <p className="text-2xl font-bold text-white">{stat.count}</p>
                <p className="text-white/50 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-white/40 text-sm">
        <p>Made for Appian Sales Teams</p>
      </footer>
    </main>
  );
}
