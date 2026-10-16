'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { ANNOUNCEMENTS } from '../content/mandalData';
import { Bell, ChevronRight, X } from 'lucide-react';

export default function AnnouncementBanner() {
  const { language } = useLanguage();
  const [dismissed, setDismissed] = useState(false);

  const activeAnnouncement = ANNOUNCEMENTS[0];
  if (!activeAnnouncement || dismissed) return null;

  return (
    <div className="bg-maroon-900 text-ivory text-xs sm:text-sm py-2 px-3 sm:px-4 border-b border-gold-500/40 relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="inline-flex items-center gap-1 bg-gold-500 text-maroon-950 font-bold px-2 py-0.5 rounded text-[11px] tracking-wide shrink-0">
            <Bell className="w-3 h-3 animate-pulse" />
            {activeAnnouncement.badge[language]}
          </span>
          <p className="truncate font-medium text-gold-100">
            {activeAnnouncement.title[language]}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/utsav"
            className="inline-flex items-center gap-1 text-gold-300 hover:text-white font-medium underline underline-offset-2 transition-colors text-xs"
          >
            <span>{language === 'mr' ? 'तपशील' : language === 'hi' ? 'विवरण' : 'Details'}</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="text-gold-300/70 hover:text-white p-0.5 rounded transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
