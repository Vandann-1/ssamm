'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  MANDAL_INFO,
  ANNOUNCEMENTS,
  GALLERY_ITEMS,
} from '@/content/mandalData';
import PhotoModal from '@/components/PhotoModal';
import { GalleryItem } from '@/types';
import {
  Calendar,
  ChevronRight,
  Eye,
  ArrowRight,
} from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/SocialIcons';

export default function HomePage() {
  const { t, language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  // Featured gallery items
  const previewPhotos = GALLERY_ITEMS.slice(0, 4);

  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      {/* 1. HERO SECTION (PURE WHITE, NO BOXES, DIRECT DEVOTIONAL FOCUS) */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Hero Left: Text & Info */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#900002] uppercase">
                ॥ {MANDAL_INFO.greeting[language]} ॥
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight font-devanagari">
                {MANDAL_INFO.name[language]}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-medium pt-1">
                {MANDAL_INFO.tagline[language]}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.home.heroDescription}
            </p>

            {/* Balaji Theme Note (Clean text, no heavy box) */}
            <div className="pt-1 text-xs sm:text-sm text-slate-700">
              <span className="font-bold text-slate-900">
                {MANDAL_INFO.themeHighlight.themeName[language]}:
              </span>{' '}
              <span className="text-slate-600">
                {MANDAL_INFO.themeHighlight.description[language]}
              </span>
            </div>

            {/* Clean Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/darshan"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#900002] hover:bg-[#720002] text-white font-bold text-sm transition-colors cursor-pointer shadow-sm"
              >
                <Eye className="w-4 h-4 text-amber-300" />
                <span>{t.home.heroDarshanCta}</span>
              </Link>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-800 hover:text-slate-950 underline underline-offset-4"
              >
                <span>{t.common.viewAllPhotos}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <a
                href={MANDAL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-pink-600 transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600" />
                <span>{MANDAL_INFO.social.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Hero Right: Clean Murti Image (No heavy box around box) */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-md shrink-0">
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="/images/murti-main.jpg"
                alt="श्री साई आशिष मित्र मंडळ - गणेश मूर्ती दर्शन"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-center text-xs text-slate-500 font-medium mt-3">
              {language === 'mr'
                ? '॥ श्री गणेश मंगल मूर्ती दर्शन • भाईंदर (पूर्व) ॥'
                : '॥ Sacred Shree Ganesh Murti Darshan • Bhayandar (East) ॥'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. LATEST ANNOUNCEMENTS (CLEAN, FLAT, NO HEAVY BOXES) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-100">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-950">
              {t.common.announcementsTitle}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {language === 'mr'
                ? 'मंडळाची ताजी माहिती आणि महत्त्वाचे अपडेट्स'
                : 'Official updates and festival notices'}
            </p>
          </div>

          <Link
            href="/utsav"
            className="text-xs font-bold text-slate-700 hover:text-slate-950 inline-flex items-center gap-1 underline underline-offset-4"
          >
            <span>{t.home.viewAllAnnouncements}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Clean Line Items (Flat layout, no cards) */}
        <div className="divide-y divide-slate-100">
          {ANNOUNCEMENTS.map((ann) => (
            <div
              key={ann.id}
              className="py-4.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6"
            >
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-bold text-amber-800">
                    {ann.badge[language]}
                  </span>
                  <span className="text-slate-300">•</span>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    {ann.title[language]}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ann.details[language]}
                </p>
              </div>

              <span className="text-xs text-slate-400 shrink-0 font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {ann.date}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CURRENT / RECENT FESTIVAL THEME: BALAJI AVATAR (OPEN EDITORIAL LAYOUT) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Balaji Artwork */}
          <div className="lg:col-span-5">
            <div
              className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-950 cursor-pointer group"
              onClick={() => setSelectedPhoto(GALLERY_ITEMS[0])}
            >
              <Image
                src="/images/balaji-avatar.svg"
                alt="श्री बालाजी अवतार गणेश दर्शन"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>{language === 'mr' ? 'मोठे पहा' : 'View Full'}</span>
              </div>
            </div>
          </div>

          {/* Balaji Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
              {t.home.balajiThemeBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              {MANDAL_INFO.themeHighlight.themeName[language]}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.darshan.balajiThemeDesc}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/darshan"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#900002] hover:bg-[#720002] text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <Eye className="w-4 h-4 text-amber-300" />
                <span>{t.home.heroDarshanCta}</span>
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#900002] underline underline-offset-4"
              >
                <span>{t.common.viewAllPhotos}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DARSHAN & PHOTO GALLERY PREVIEW (CLEAN PHOTO GRID, NO FRAMES) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-950">
              {t.home.darshanPreviewTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {t.home.darshanPreviewSub}
            </p>
          </div>
          <Link
            href="/gallery"
            className="text-xs sm:text-sm font-bold text-slate-800 hover:text-[#900002] inline-flex items-center gap-1 underline underline-offset-4"
          >
            <span>{t.common.viewAllPhotos}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {previewPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="cursor-pointer group space-y-2"
            >
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src={photo.imageUrl}
                  alt={photo.title[language]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  {photo.year}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-[#900002] transition-colors truncate">
                  {photo.title[language]}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {photo.caption[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INSTAGRAM & CONNECT (CLEAN FLAT SECTION) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center space-y-4 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-black text-slate-950">
          {t.common.instagramHeading}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          {t.common.instagramSub}
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={MANDAL_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#900002] hover:bg-[#720002] text-white font-bold text-sm transition-colors shadow-sm"
          >
            <InstagramIcon className="w-4 h-4 text-pink-400" />
            <span>{t.common.followOnInstagram} ({MANDAL_INFO.social.instagramHandle})</span>
          </a>

          <a
            href={MANDAL_INFO.social.whatsappInquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Lightbox Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          item={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
}
