'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { SOCIAL_INITIATIVES, MANDAL_INFO } from '@/content/mandalData';
import DevotionalDivider from '@/components/DevotionalDivider';
import {
  Heart,
  ShieldCheck,
  Users,
  Leaf,
  Utensils,
  Trash2,
  AlertCircle,
} from 'lucide-react';
import { InstagramIcon } from '@/components/SocialIcons';

export default function SocialWorkPage() {
  const { t, language } = useLanguage();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cleanliness':
        return <Trash2 className="w-4 h-4 text-emerald-600" />;
      case 'food':
        return <Utensils className="w-4 h-4 text-amber-600" />;
      case 'environment':
        return <Leaf className="w-4 h-4 text-green-600" />;
      case 'youth':
      default:
        return <Users className="w-4 h-4 text-maroon-700" />;
    }
  };

  return (
    <div className="flex flex-col w-full py-8 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold border border-gold-300">
          <Heart className="w-3.5 h-3.5 text-maroon-700" />
          <span>{t.social.verifiedBadge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-maroon-900 tracking-tight font-devanagari">
          {t.social.pageTitle}
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 max-w-2xl mx-auto">
          {t.social.pageSub}
        </p>
      </div>

      {/* Intro Philosophy Card */}
      <div className="bg-white rounded-2xl border border-gold-300/70 p-6 sm:p-8 shadow-xs space-y-3">
        <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-medium">
          {t.social.introText}
        </p>
        <div className="p-3.5 rounded-xl bg-ivory-card border border-gold-300/50 flex items-start gap-2.5 text-xs text-charcoal-600">
          <AlertCircle className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
          <p>{t.social.honestNote}</p>
        </div>
      </div>

      <DevotionalDivider />

      {/* Detailed Social Initiatives List */}
      <div className="space-y-8">
        {SOCIAL_INITIATIVES.map((initiative, idx) => (
          <div
            key={initiative.id}
            className="bg-white rounded-2xl border border-gold-300/70 overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-5 sm:p-6"
          >
            {/* Visual illustration / photo */}
            <div className={`md:col-span-5 ${idx % 2 === 1 ? 'md:order-last' : ''}`}>
              <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-gold-300/60 bg-maroon-950">
                <Image
                  src={initiative.imageUrl}
                  alt={initiative.title[language]}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-maroon-900/80 text-gold-200 text-[10px] font-semibold px-2 py-0.5 rounded">
                  {initiative.year}
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-md bg-gold-100 border border-gold-200">
                  {getCategoryIcon(initiative.category)}
                </span>
                <span className="text-xs font-bold text-gold-700 uppercase tracking-wide">
                  {initiative.category}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-maroon-900 leading-tight">
                {initiative.title[language]}
              </h2>

              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {initiative.fullDescription[language]}
              </p>

              {initiative.metrics && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-50 border border-gold-300 text-xs font-bold text-maroon-800">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  <span>{initiative.metrics[language]}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Youth Volunteer Call to Action */}
      <section className="bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 p-8 sm:p-10 text-center space-y-4 shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
          <Users className="w-6 h-6 text-amber-800" />
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          {language === 'mr' ? 'मंडळाच्या समाजकार्यात सहभागी व्हा' : 'Volunteer With Us In Community Service'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          {language === 'mr'
            ? 'आपण स्थानिक युवक असाल आणि गणेशोत्सवात शिस्त, स्वच्छता व भाविकांच्या सेवेसाठी वेळ देऊ इच्छित असाल तर आमच्याशी नक्की संपर्क साधा.'
            : 'If you are a neighborhood youth eager to contribute towards cleanliness, devotee queue order, and festival harmony, join our volunteer family.'}
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
          >
            {t.common.contactUs}
          </Link>
          <a
            href={MANDAL_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-semibold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors shadow-2xs"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
            <span>{t.common.followOnInstagram}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
