'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { MANDAL_INFO } from '@/content/mandalData';
import Emblem from '@/components/Emblem';
import {
  Calendar,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Eye,
} from 'lucide-react';

export default function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col w-full py-8 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold border border-gold-300">
          <Calendar className="w-3.5 h-3.5" />
          <span>{t.common.estdBadge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-maroon-900 tracking-tight font-devanagari">
          {t.about.pageTitle}
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 max-w-2xl mx-auto">
          {t.about.pageSub}
        </p>
      </div>

      {/* Main Narrative Card */}
      <div className="bg-white rounded-2xl border border-gold-300/70 p-6 sm:p-10 shadow-xs space-y-8">
        <div className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b border-gold-200">
          <Emblem size="xl" />
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-black text-maroon-900">
              {MANDAL_INFO.name[language]}
            </h2>
            <p className="text-xs sm:text-sm text-gold-700 font-semibold">
              {MANDAL_INFO.tagline[language]}
            </p>
            <p className="text-xs text-charcoal-500">
              {MANDAL_INFO.location.addressLine[language]}
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="space-y-4 text-sm sm:text-base text-charcoal-700 leading-relaxed">
          <h3 className="text-lg sm:text-xl font-bold text-maroon-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-500" />
            <span>{t.about.historyTitle}</span>
          </h3>
          <p>{t.about.historyText1}</p>
          <p>{t.about.historyText2}</p>
        </div>

        {/* Mandal Emblem & Visual Showcase */}
        <div className="relative aspect-16/9 rounded-xl overflow-hidden border border-gold-300 bg-maroon-950">
          <Image
            src="/images/aagaman-sohala.svg"
            alt="श्री साई आशिष मित्र मंडळ - उत्सव परंपरा"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <p className="text-xs sm:text-sm text-gold-200 font-semibold">
              {language === 'mr'
                ? 'स्थानिक तरुण कार्यकर्त्यांचा उत्साह आणि एकात्मतेचे प्रतीक'
                : 'A living symbol of youthful enthusiasm and neighborhood harmony'}
            </p>
          </div>
        </div>

        {/* Three Guiding Pillars */}
        <div className="space-y-4 pt-4">
          <h3 className="text-lg sm:text-xl font-bold text-maroon-900">
            {t.about.pillarsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-ivory-card border border-gold-300/60 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-maroon-700 text-gold-200 flex items-center justify-center font-bold">
                १
              </div>
              <h4 className="font-bold text-sm sm:text-base text-maroon-900">
                {t.about.pillar1Title}
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                {t.about.pillar1Desc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ivory-card border border-gold-300/60 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-maroon-700 text-gold-200 flex items-center justify-center font-bold">
                २
              </div>
              <h4 className="font-bold text-sm sm:text-base text-maroon-900">
                {t.about.pillar2Title}
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                {t.about.pillar2Desc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ivory-card border border-gold-300/60 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-maroon-700 text-gold-200 flex items-center justify-center font-bold">
                ३
              </div>
              <h4 className="font-bold text-sm sm:text-base text-maroon-900">
                {t.about.pillar3Title}
              </h4>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                {t.about.pillar3Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Cherished Traditions */}
        <div className="space-y-3 pt-4">
          <h3 className="text-lg sm:text-xl font-bold text-maroon-900">
            {t.about.traditionsTitle}
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-maroon-700 shrink-0 mt-0.5" />
              <span>{t.about.tradition1}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-maroon-700 shrink-0 mt-0.5" />
              <span>{t.about.tradition2}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-maroon-700 shrink-0 mt-0.5" />
              <span>{t.about.tradition3}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-maroon-700 shrink-0 mt-0.5" />
              <span>{t.about.tradition4}</span>
            </li>
          </ul>
        </div>

        {/* Mandal Leadership & Office Bearer: President Sachin Manjrekar */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#900002]" />
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                {language === 'mr'
                  ? 'मंडळ नेतृत्व व पदाधिकारी'
                  : language === 'hi'
                  ? 'मंडल नेतृत्व एवं पदाधिकारी'
                  : 'Mandal Leadership & Committee'}
              </h3>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              {language === 'mr' ? 'अधिकृत' : 'Official'}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#900002] uppercase tracking-wider block">
                {language === 'mr' ? 'अध्यक्ष' : language === 'hi' ? 'अध्यक्ष' : 'President'}
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-slate-950 font-devanagari">
                {language === 'en' ? 'Sachin Manjrekar' : 'सचिन मांजरेकर'}
              </h4>
              <p className="text-xs text-slate-500">
                {language === 'mr'
                  ? 'श्री साई आशिष मित्र मंडळ • सार्वजनिक गणेशोत्सव, भाईंदर (पूर्व)'
                  : 'Shree Sai Ashish Mitra Mandal • Sarvajanik Ganeshotsav, Bhayandar (East)'}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-600 block">
                {language === 'mr' ? 'संपर्क:' : 'Contact:'}{' '}
                <a href="tel:+917977867266" className="font-bold text-[#900002] hover:underline">
                  +91 79778 67266
                </a>
              </span>
              <span className="text-xs text-slate-500 block mt-0.5">
                <a href="mailto:saiashishmitramandal@gmail.com" className="hover:underline">
                  saiashishmitramandal@gmail.com
                </a>
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed pt-1">
            {language === 'mr'
              ? 'अध्यक्ष सचिन मांजरेकर यांच्या मार्गदर्शनाखाली आणि परिसरातील उत्साही युवा कार्यकर्त्यांच्या एकजुटीने मंडळ दरवर्षी शिस्तबद्ध आणि भावपूर्ण गणेशोत्सव साजरा करते.'
              : language === 'hi'
              ? 'अध्यक्ष सचिन मांजरेकर के मार्गदर्शन में एवं क्षेत्र के उत्साही युवा कार्यकर्ताओं के सहयोग से मंडल प्रतिवर्ष अनुशासित एवं भक्तिमय गणेशोत्सव मनाता है।'
              : 'Under the dedicated leadership of President Sachin Manjrekar and the collective energy of local youth volunteers, the Mandal celebrates a disciplined and vibrant Ganeshotsav every year.'}
          </p>
        </div>

        {/* Navigation links to Darshan and Social Work */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
          <Link
            href="/darshan"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#900002] hover:bg-[#720002] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
          >
            <Eye className="w-4 h-4 text-amber-300" />
            <span>{t.common.viewDarshan}</span>
          </Link>

          <Link
            href="/social-work"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#900002] hover:underline"
          >
            <span>{t.common.socialHighlightsTitle}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
