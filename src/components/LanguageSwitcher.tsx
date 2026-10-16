'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'pills' | 'compact' | 'crimson';
}

export default function LanguageSwitcher({
  className = '',
  variant = 'pills',
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; short: string }[] = [
    { code: 'mr', label: 'मराठी', short: 'म' },
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'hi', label: 'हिन्दी', short: 'हि' },
  ];

  if (variant === 'crimson') {
    return (
      <div className={`inline-flex items-center gap-1.5 bg-black/25 px-2 py-1 rounded-lg border border-white/20 text-white ${className}`}>
        <Globe className="w-3.5 h-3.5 text-amber-300 shrink-0" />
        <span className="text-[11px] text-amber-200/90 font-medium hidden sm:inline">Language:</span>
        <div className="flex items-center gap-1">
          {languages.map((lang) => {
            const isActive = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                className={`px-2 py-0.5 text-xs font-semibold rounded transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
                aria-pressed={isActive}
              >
                {lang.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-1 bg-maroon-900/10 p-1 rounded-full border border-gold-400/30 ${className}`}>
        <Globe className="w-3.5 h-3.5 text-gold-600 ml-1.5 shrink-0" />
        <div className="flex items-center gap-0.5">
          {languages.map((lang) => {
            const isActive = language === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all duration-150 ${
                  isActive
                    ? 'bg-maroon-700 text-white shadow-xs'
                    : 'text-charcoal-700 hover:text-maroon-800 hover:bg-gold-100/50'
                }`}
                aria-label={`Switch to ${lang.label}`}
              >
                {lang.short}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-1 bg-ivory-card border border-gold-400/40 rounded-lg p-1 shadow-xs ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <div className="flex items-center gap-1 pl-1.5 pr-1 text-gold-700">
        <Globe className="w-3.5 h-3.5 shrink-0" />
      </div>
      <div className="flex items-center gap-1">
        {languages.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'bg-maroon-700 text-white font-semibold shadow-xs'
                  : 'text-charcoal-700 hover:text-maroon-800 hover:bg-gold-100'
              }`}
              aria-pressed={isActive}
            >
              {lang.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
