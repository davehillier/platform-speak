'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

interface TimerProps {
  duration: number;
  isRunning: boolean;
  onComplete: () => void;
  onTick?: (remaining: number) => void;
}

export function Timer({ duration, isRunning, onComplete, onTick }: TimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const hasCompletedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const onTickRef = useRef(onTick);

  // Keep refs updated
  useEffect(() => {
    onCompleteRef.current = onComplete;
    onTickRef.current = onTick;
  }, [onComplete, onTick]);

  // Reset timer when duration changes
  useEffect(() => {
    setTimeRemaining(duration);
    hasCompletedRef.current = false;
  }, [duration]);

  // Handle completion outside of state setter
  useEffect(() => {
    if (timeRemaining <= 0 && !hasCompletedRef.current && isRunning) {
      hasCompletedRef.current = true;
      onCompleteRef.current();
    }
  }, [timeRemaining, isRunning]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        const newTime = prev - 1;
        onTickRef.current?.(newTime);

        if (newTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const percentage = (timeRemaining / duration) * 100;
  const isUrgent = timeRemaining <= 10;
  const isCritical = timeRemaining <= 5;

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Circular progress */}
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-white/20"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - percentage / 100)}`}
            className={`transition-all duration-300 ${
              isCritical
                ? 'text-red-500'
                : isUrgent
                ? 'text-yellow-500'
                : 'text-white'
            }`}
          />
        </svg>
        {/* Time display */}
        <div
          className={`absolute inset-0 flex items-center justify-center text-4xl font-bold ${
            isCritical
              ? 'text-red-500 animate-pulse'
              : isUrgent
              ? 'text-yellow-500'
              : 'text-white'
          }`}
        >
          {formatTime(timeRemaining)}
        </div>
      </div>
    </div>
  );
}
