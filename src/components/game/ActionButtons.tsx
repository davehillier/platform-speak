'use client';

import { Check, SkipForward, X } from 'lucide-react';

interface ActionButtonsProps {
  onCorrect: () => void;
  onPass: () => void;
  onSkip: () => void;
  disabled?: boolean;
}

export function ActionButtons({
  onCorrect,
  onPass,
  onSkip,
  disabled = false,
}: ActionButtonsProps) {
  return (
    <div className="flex justify-center gap-4 w-full max-w-md mx-auto">
      {/* Skip button */}
      <button
        onClick={onSkip}
        disabled={disabled}
        className="flex-1 flex flex-col items-center gap-2 py-4 px-6 bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl transition-all active:scale-95 shadow-lg"
      >
        <X className="w-8 h-8 text-white" />
        <span className="text-white font-semibold text-sm">Skip</span>
      </button>

      {/* Pass button */}
      <button
        onClick={onPass}
        disabled={disabled}
        className="flex-1 flex flex-col items-center gap-2 py-4 px-6 bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl transition-all active:scale-95 shadow-lg"
      >
        <SkipForward className="w-8 h-8 text-white" />
        <span className="text-white font-semibold text-sm">Pass</span>
      </button>

      {/* Correct button */}
      <button
        onClick={onCorrect}
        disabled={disabled}
        className="flex-1 flex flex-col items-center gap-2 py-4 px-6 bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl transition-all active:scale-95 shadow-lg"
      >
        <Check className="w-8 h-8 text-white" />
        <span className="text-white font-semibold text-sm">Correct</span>
      </button>
    </div>
  );
}
