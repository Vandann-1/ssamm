'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { MANDAL_INFO, GALLERY_ITEMS } from '@/content/mandalData';
import DevotionalDivider from '@/components/DevotionalDivider';
import PhotoModal from '@/components/PhotoModal';
import { GalleryItem } from '@/types';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  Eye,
  ChevronRight,
  Info,
} from 'lucide-react';

export default function DarshanPage() {
  const { t, language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  // Darshan-specific photos
  const darshanPhotos = GALLERY_ITEMS.filter((item) => item.category === 'darshan');

  return (
    <div className="flex flex-col w-full py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold border border-gold-300">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>{MANDAL_INFO.greeting[language]}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-maroon-900 tracking-tight font-devanagari">
          {t.darshan.pageTitle}
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 max-w-2xl mx-auto">
          {t.darshan.pageSub}
        </p>
      </div>

      {/* Main Murti Darshan Showcase */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-xs text-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
          {/* Main Photo */}
          <div className="lg:col-span-7">
            <div
              className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white p-1.5 cursor-pointer group"
              onClick={() => setSelectedPhoto(GALLERY_ITEMS[1])}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/murti-main.jpg"
                  alt="श्री साई आशिष मित्र मंडळ - मुख्य गणेश मूर्ती"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                  priority
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{language === 'mr' ? 'मोठ्या आकारात दर्शन घ्या' : 'Fullscreen Darshan'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Darshan Details */}
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-md border border-amber-200">
              {language === 'mr' ? '॥ मंगलमूर्ती बाप्पा ॥' : '॥ Shree Mangal Murti ॥'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {t.darshan.murtiTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'mr'
                ? 'शांत, नयनरम्य व करुणापूर्ण आशीर्वाद मुद्रेतील बाप्पांचे विलोभनीय रूप. मंडळात येणारा प्रत्येक भाविक बाप्पांच्या दर्शनाने तृप्त व प्रसन्न होतो.'
                : 'Serene and benevolent posture of Lord Ganesha, radiating peace and boundless divine grace to all arriving pilgrims.'}
            </p>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>{t.common.darshanTimingsLabel}:</span>
              </div>
              <p className="text-slate-700 font-semibold pl-6">
                {MANDAL_INFO.contact.darshanTimings[language]}
              </p>
            </div>

            <p className="text-[11px] text-slate-500 italic">
              {t.darshan.prasadInfo}
            </p>
          </div>
        </div>
      </div>

      <DevotionalDivider />

      {/* Balaji Avatar Theme Special Feature */}
      <section className="bg-white rounded-2xl border border-gold-300/70 p-6 sm:p-8 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-maroon-700 text-white text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>{MANDAL_INFO.themeHighlight.year} • {t.home.balajiThemeBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-maroon-900 leading-tight">
              {t.darshan.balajiThemeTitle}
            </h2>
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              {t.darshan.balajiThemeDesc}
            </p>
            <div className="p-4 rounded-xl bg-ivory-card border border-gold-300/50 space-y-1 text-xs text-charcoal-700">
              <p className="font-bold text-maroon-900">
                {language === 'mr' ? 'वैशिष्ट्ये:' : 'Features:'}
              </p>
              <ul className="list-disc list-inside space-y-1 text-charcoal-600">
                <li>{language === 'mr' ? 'शंख, चक्र व पारंपरिक तिरुपती अलंकारांनी सुसज्ज' : 'Adorned with divine Shankha, Chakra and Tirupati silks'}</li>
                <li>{language === 'mr' ? 'कपाळावर भव्य नाम व कस्तुरी टिळक' : 'Grand Vaishnavite Urdhva Pundra Namam and Kasturi tilak'}</li>
                <li>{language === 'mr' ? 'आनंद निलयम मंदिराची सात्विक प्रतिकृती सजावट' : 'Sanctum decor replicating the sacred Tirumala shrine'}</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              className="relative aspect-4/3 rounded-xl overflow-hidden border-2 border-gold-400 shadow-md bg-maroon-950 cursor-pointer group"
              onClick={() => setSelectedPhoto(GALLERY_ITEMS[0])}
            >
              <Image
                src="/images/balaji-avatar.svg"
                alt="श्री बालाजी अवतार गणेश दर्शन"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute bottom-3 right-3 bg-maroon-900/90 text-gold-200 text-xs font-semibold px-3 py-1 rounded-md border border-gold-400/40 flex items-center gap-1 shadow-xs">
                <Eye className="w-3.5 h-3.5" />
                <span>{language === 'mr' ? 'दर्शन पहा' : 'View Murti'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Darshan Images */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-maroon-900">
              {language === 'mr' ? 'इतर दर्शन छायाचित्रे' : 'Darshan Views & Sanctum'}
            </h3>
            <p className="text-xs text-charcoal-500">
              {language === 'mr' ? 'उत्सवातील मनमोहक क्षणांचे दर्शन' : 'Cherished visual moments of Bappa'}
            </p>
          </div>
          <Link
            href="/gallery"
            className="text-xs sm:text-sm font-bold text-maroon-700 hover:text-maroon-900 underline flex items-center gap-1"
          >
            <span>{t.common.viewAllPhotos}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {darshanPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group bg-white rounded-xl overflow-hidden border border-gold-300/60 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 w-full bg-maroon-950 overflow-hidden">
                <Image
                  src={photo.imageUrl}
                  alt={photo.title[language]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3.5 space-y-1">
                <h4 className="font-bold text-sm text-maroon-900 leading-snug">
                  {photo.title[language]}
                </h4>
                <p className="text-xs text-charcoal-500 line-clamp-2">
                  {photo.caption[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Devotee Guidelines for Darshan */}
      <section className="bg-white rounded-2xl border border-gold-300/70 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-maroon-900 font-bold text-lg">
          <Info className="w-5 h-5 text-gold-600 shrink-0" />
          <h3>{t.darshan.darshanRulesTitle}</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-charcoal-700">
          <div className="p-3 rounded-lg bg-gold-50/60 border border-gold-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-maroon-700 shrink-0 mt-0.5" />
            <span>{t.darshan.rule1}</span>
          </div>
          <div className="p-3 rounded-lg bg-gold-50/60 border border-gold-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-maroon-700 shrink-0 mt-0.5" />
            <span>{t.darshan.rule2}</span>
          </div>
          <div className="p-3 rounded-lg bg-gold-50/60 border border-gold-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-maroon-700 shrink-0 mt-0.5" />
            <span>{t.darshan.rule3}</span>
          </div>
          <div className="p-3 rounded-lg bg-gold-50/60 border border-gold-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-maroon-700 shrink-0 mt-0.5" />
            <span>{t.darshan.rule4}</span>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <PhotoModal
          item={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
}
