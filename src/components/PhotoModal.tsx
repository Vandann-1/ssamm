'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';

interface PhotoModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function PhotoModal({
  item,
  onClose,
  onNext,
  onPrev,
}: PhotoModalProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-4xl w-full bg-maroon-950 border border-gold-500/50 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gold-500/30 bg-maroon-900 text-gold-100">
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1 font-semibold text-gold-400">
              <Calendar className="w-3.5 h-3.5" />
              {item.year}
            </span>
            <span className="text-gold-500/50">•</span>
            <span className="flex items-center gap-1 text-gold-200 capitalize">
              <Tag className="w-3.5 h-3.5 text-gold-400" />
              {item.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gold-200 hover:text-white hover:bg-maroon-800 transition-colors cursor-pointer"
            aria-label="Close photo view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Content Container */}
        <div className="relative w-full bg-black/50 flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[60vh] overflow-hidden">
          <Image
            src={item.imageUrl}
            alt={item.title[language]}
            width={1000}
            height={700}
            className="w-full h-full object-contain max-h-[60vh]"
            priority
          />

          {/* Navigation Arrows */}
          {onPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-gold-600 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-gold-600 transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Caption & Details Footer */}
        <div className="p-4 bg-maroon-900 border-t border-gold-500/30 text-gold-100">
          <h3 className="text-base sm:text-lg font-bold text-white mb-1">
            {item.title[language]}
          </h3>
          <p className="text-xs sm:text-sm text-gold-200/90 leading-relaxed">
            {item.caption[language]}
          </p>
          {item.theme && (
            <p className="text-xs text-gold-400 mt-2 font-medium">
              ✨ {item.theme}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
