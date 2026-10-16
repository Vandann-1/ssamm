'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { GALLERY_ITEMS, MANDAL_INFO } from '@/content/mandalData';
import PhotoModal from '@/components/PhotoModal';
import { GalleryItem } from '@/types';
import {
  Camera,
  Filter,
  Calendar,
  Eye,
  Info,
} from 'lucide-react';
import { InstagramIcon } from '@/components/SocialIcons';

export default function GalleryPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  // Categories list
  const categories = [
    { id: 'all', label: t.gallery.allTab },
    { id: 'darshan', label: t.gallery.darshanTab },
    { id: 'aagaman', label: t.gallery.aagamanTab },
    { id: 'decoration', label: t.gallery.decorationTab },
    { id: 'visarjan', label: t.gallery.visarjanTab },
    { id: 'social', label: t.gallery.socialTab },
  ];

  // Available years in dataset
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(GALLERY_ITEMS.map((item) => item.year)));
    return years.sort((a, b) => b - a);
  }, []);

  // Filtered gallery items
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchYear = selectedYear === 'all' || item.year === selectedYear;
      return matchCategory && matchYear;
    });
  }, [selectedCategory, selectedYear]);

  // Next / Prev handlers for modal
  const handleNext = () => {
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeModalItem.id);
    if (currentIndex < filteredItems.length - 1) {
      setActiveModalItem(filteredItems[currentIndex + 1]);
    } else {
      setActiveModalItem(filteredItems[0]);
    }
  };

  const handlePrev = () => {
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeModalItem.id);
    if (currentIndex > 0) {
      setActiveModalItem(filteredItems[currentIndex - 1]);
    } else {
      setActiveModalItem(filteredItems[filteredItems.length - 1]);
    }
  };

  return (
    <div className="flex flex-col w-full py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold border border-gold-300">
          <Camera className="w-3.5 h-3.5 text-gold-700" />
          <span>{language === 'mr' ? 'स्मृती दालन' : 'Photo Archive'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-maroon-900 tracking-tight font-devanagari">
          {t.gallery.pageTitle}
        </h1>
        <p className="text-sm sm:text-base text-charcoal-600 max-w-2xl mx-auto">
          {t.gallery.pageSub}
        </p>
      </div>

      {/* Filter Bar: Categories & Year Filter */}
      <div className="bg-white rounded-2xl border border-gold-300/70 p-4 sm:p-5 shadow-xs space-y-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none" role="tablist">
          <span className="text-xs font-bold text-charcoal-500 mr-2 flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5 text-maroon-700" />
            <span>{t.common.filter}:</span>
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-maroon-700 text-white shadow-xs'
                    : 'bg-ivory-card text-charcoal-700 hover:bg-gold-100/70 border border-gold-200'
                }`}
                role="tab"
                aria-selected={isSelected}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Year Filter */}
        <div className="flex items-center gap-2 pt-2 border-t border-gold-200/60 text-xs">
          <span className="font-bold text-charcoal-600 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-gold-600" />
            <span>{t.gallery.filterByYear}:</span>
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSelectedYear('all')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                selectedYear === 'all'
                  ? 'bg-gold-600 text-white font-bold'
                  : 'bg-ivory-card text-charcoal-700 hover:bg-gold-100'
              }`}
            >
              {t.common.all}
            </button>
            {availableYears.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                  selectedYear === yr
                    ? 'bg-gold-600 text-white font-bold'
                    : 'bg-ivory-card text-charcoal-700 hover:bg-gold-100'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      {filteredItems.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-gold-300 text-charcoal-500">
          <p className="font-semibold text-sm">
            {language === 'mr' ? 'या वर्गात चित्रे उपलब्ध नाहीत.' : 'No photographs available in this filter.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActiveModalItem(photo)}
              className="group bg-white rounded-xl overflow-hidden border border-gold-300/60 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 w-full bg-maroon-950 overflow-hidden">
                <Image
                  src={photo.imageUrl}
                  alt={photo.title[language]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-maroon-900/85 text-gold-200 text-[10px] font-semibold px-2 py-0.5 rounded border border-gold-400/30">
                  {photo.year}
                </div>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[11px] font-medium px-2 py-1 rounded flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>{t.gallery.viewOriginal}</span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-maroon-900 group-hover:text-maroon-700 transition-colors leading-snug">
                    {photo.title[language]}
                  </h3>
                  <p className="text-xs text-charcoal-600 line-clamp-2 mt-1 leading-relaxed">
                    {photo.caption[language]}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-gold-100 flex items-center justify-between text-[11px] text-gold-700 font-medium">
                  <span className="capitalize">{photo.category}</span>
                  {photo.theme && <span className="font-bold text-maroon-700">★ {photo.theme}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Organizer Upload & Instagram Notice */}
      <div className="p-4 sm:p-5 rounded-xl bg-ivory-card border border-gold-300/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-700">
        <div className="flex items-center gap-3">
          <Info className="w-5 h-5 text-gold-600 shrink-0" />
          <p className="leading-relaxed">
            {t.gallery.uploadNotice}
          </p>
        </div>
        <a
          href={MANDAL_INFO.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-maroon-700 hover:bg-maroon-800 text-white font-bold text-xs shrink-0 transition-colors"
        >
          <InstagramIcon className="w-3.5 h-3.5" />
          <span>{t.common.followOnInstagram}</span>
        </a>
      </div>

      {/* Photo Lightbox Modal */}
      {activeModalItem && (
        <PhotoModal
          item={activeModalItem}
          onClose={() => setActiveModalItem(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
