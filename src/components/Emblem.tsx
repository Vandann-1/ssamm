'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface EmblemProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  customLogoSrc?: string;
}

export default function Emblem({
  size = 'md',
  showText = false,
  className = '',
  customLogoSrc = '/images/logo.png',
}: EmblemProps) {
  const [imageError, setImageError] = useState(false);

  // Dimension mapping
  const dimMap = {
    sm: { box: 38, text: 'text-xs' },
    md: { box: 48, text: 'text-sm' },
    lg: { box: 64, text: 'text-base' },
    xl: { box: 96, text: 'text-lg' },
  };

  const { box, text } = dimMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Emblem Graphic: uses custom logo if provided and available, else renders our high-res sacred SVG crest */}
      {!imageError && customLogoSrc ? (
        <div
          className="relative shrink-0 rounded-full overflow-hidden border border-gold-400/60 shadow-sm bg-maroon-900"
          style={{ width: box, height: box }}
        >
          <Image
            src={customLogoSrc}
            alt="श्री साई आशिष मित्र मंडळ बोधचिन्ह"
            width={box}
            height={box}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
            priority
          />
        </div>
      ) : (
        <div
          className="shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-maroon-800 via-maroon-700 to-maroon-900 border-2 border-gold-400 shadow-md text-gold-300"
          style={{ width: box, height: box }}
          title="श्री साई आशिष मित्र मंडळ"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-4/5 h-4/5 text-gold-400 drop-shadow"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Sacred Ring */}
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="50" cy="50" r="43" fill="none" stroke="#e6ca85" strokeWidth="1" />

            {/* Kalash Top */}
            <polygon points="50,14 43,24 57,24" fill="#e6ca85" />
            <circle cx="50" cy="11" r="2.5" fill="#e6ca85" />

            {/* Sacred Lotus Base */}
            <path
              d="M32,78 Q50,70 68,78 Q60,86 50,88 Q40,86 32,78 Z"
              fill="#dfb15b"
            />
            <path
              d="M38,78 Q50,74 62,78"
              fill="none"
              stroke="#5a101b"
              strokeWidth="1.5"
            />

            {/* Ganesha Sacred Silhouette */}
            {/* Crown / Mukut */}
            <polygon points="50,26 44,36 56,36" fill="#fdfaf3" />
            <circle cx="50" cy="24" r="2" fill="#dfb15b" />

            {/* Mastak / Forehead */}
            <path
              d="M42,37 Q50,33 58,37 Q60,45 50,47 Q40,45 42,37 Z"
              fill="#fdfaf3"
            />
            {/* Tilak / Trinetra */}
            <path d="M49,34 L51,34 L50.5,41 L49.5,41 Z" fill="#701722" />
            <circle cx="50" cy="42" r="1" fill="#701722" />

            {/* Ear Left */}
            <path
              d="M42,38 C34,38 31,48 40,54 C42,50 42,43 42,38 Z"
              fill="#e6ca85"
            />
            {/* Ear Right */}
            <path
              d="M58,38 C66,38 69,48 60,54 C58,50 58,43 58,38 Z"
              fill="#e6ca85"
            />

            {/* Trunk / Sond curving rightward in auspicious devotion */}
            <path
              d="M48,47 Q52,56 54,61 Q57,65 62,64 Q66,61 63,57 Q60,57 58,60 Q55,59 52,52 Q50,47 48,47 Z"
              fill="#fdfaf3"
            />

            {/* Modak in trunk */}
            <circle cx="63" cy="56" r="2.5" fill="#f4e5c2" stroke="#aa8033" strokeWidth="0.5" />

            {/* Auspicious year text inside */}
            <text
              x="50"
              y="74"
              textAnchor="middle"
              fontSize="7"
              fontWeight="bold"
              fill="#dfb15b"
              fontFamily="sans-serif"
            >
              २०१५
            </text>
          </svg>
        </div>
      )}

      {/* Optional text alongside */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-tight text-maroon-900 leading-tight ${text}`}>
            श्री साई आशिष मित्र मंडळ
          </span>
          <span className="text-[11px] font-medium text-gold-700 tracking-wider">
            सार्वजनिक गणेशोत्सव • स्था. २०१५
          </span>
        </div>
      )}
    </div>
  );
}
