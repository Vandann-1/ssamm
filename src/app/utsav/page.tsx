'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FESTIVAL_EVENTS, MANDAL_INFO } from '@/content/mandalData';
import {
  Calendar,
  Clock,
  MapPin,
  Archive,
} from 'lucide-react';

export default function UtsavPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col w-full py-8 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold border border-gold-300">
          <Calendar className="w-3.5 h-3.5 text-gold-600" />
          <span>{t.utsav.festivalYearBadge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-maroon-900 tracking-tight font-devanagari">
          {t.utsav.pageTitle}
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 max-w-2xl mx-auto">
          {t.utsav.pageSub}
        </p>
      </div>

      {/* 10-Day Festival Timeline & Major Rituals */}
      <section className="space-y-6">
        <div className="text-center sm:text-left space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {t.utsav.scheduleTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {language === 'mr'
              ? 'भाद्रपद शुक्ल चतुर्थी ते अनंत चतुर्दशी दरम्यान होणारे प्रमुख विधी व सोहळे'
              : 'Key religious rituals, aagaman, satyanarayan pooja, and immersion procession'}
          </p>
        </div>

        <div className="space-y-4">
          {FESTIVAL_EVENTS.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all ${
                event.highlight
                  ? 'border-amber-300 bg-amber-50/30'
                  : 'border-slate-200'
              }`}
            >
              {/* Day & Date badge */}
              <div className="flex items-center gap-4 md:w-56 shrink-0">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex flex-col items-center justify-center font-bold shadow-xs shrink-0">
                  <span className="text-[10px] text-slate-400 uppercase leading-none">
                    {language === 'mr' ? 'दिवस' : 'Day'}
                  </span>
                  <span className="text-lg leading-tight">{event.dayNumber}</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    {event.date}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-amber-600" />
                    {event.time}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900">
                    {event.title[language]}
                  </h3>
                  {event.highlight && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 uppercase shrink-0">
                      {t.utsav.upcomingBadge}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {event.description[language]}
                </p>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 pt-1">
                  <MapPin className="w-3 h-3 text-amber-700" />
                  <span>{event.location[language]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Festival Archive & Legacy Note */}
      <section className="bg-ivory-card rounded-2xl border border-gold-300/70 p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2 text-maroon-900 font-bold text-base sm:text-lg">
          <Archive className="w-5 h-5 text-gold-700 shrink-0" />
          <h3>{t.utsav.archiveTitle}</h3>
        </div>
        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
          {t.utsav.archiveText}
        </p>
        <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-charcoal-700">
          <span className="px-3 py-1 bg-white rounded-lg border border-gold-300">२०२४: {MANDAL_INFO.themeHighlight.themeName[language]}</span>
          <span className="px-3 py-1 bg-white rounded-lg border border-gold-300">२०२३: पर्यावरणपूरक शाडू माती देखावा</span>
          <span className="px-3 py-1 bg-white rounded-lg border border-gold-300">२०१५: स्थापना वर्ष</span>
        </div>
      </section>
    </div>
  );
}
