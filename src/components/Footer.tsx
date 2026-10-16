'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { MANDAL_INFO } from '../content/mandalData';
import { MapPin, Clock, Heart, ExternalLink, Phone, Mail } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#900002] text-white border-t border-[#a60b0e] mt-auto">
      {/* Devotional Salutation Bar */}
      <div className="bg-[#700002] border-b border-[#5e0001] py-3 px-4 text-center">
        <p className="text-sm sm:text-base font-bold text-amber-300 tracking-wide">
          {t.common.ganpatiGreeting}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Col 1: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-4 border-b border-white/20 pb-2">
              {t.common.quickLinks}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-white/90">
                  <span className="text-amber-400">›</span> {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/darshan" className="hover:text-amber-200 transition-colors flex items-center gap-1.5 font-bold text-amber-300">
                  <span className="text-amber-400">›</span> {t.nav.darshan}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-white/90">
                  <span className="text-amber-400">›</span> {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link href="/utsav" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-white/90">
                  <span className="text-amber-400">›</span> {t.nav.utsav}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-white/90">
                  <span className="text-amber-400">›</span> {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/social-work" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-white/90">
                  <span className="text-amber-400">›</span> {t.nav.socialWork}
                </Link>
              </li>
              <li className="col-span-2">
                <Link href="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-white/90 font-bold">
                  <span className="text-amber-400">›</span> {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Mandap Location & Darshan Hours */}
          <div>
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-4 border-b border-white/20 pb-2">
              {t.common.darshanTimingsLabel}
            </h4>
            <div className="space-y-3 text-xs text-amber-100/90">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">
                    {MANDAL_INFO.contact.darshanTimings[language]}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">
                    {MANDAL_INFO.location.addressLine[language]}
                  </p>
                  <a
                    href={MANDAL_INFO.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-200 underline mt-1"
                  >
                    <span>{language === 'mr' ? 'नकाशा पहा' : 'View on Google Maps'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Official Contact & Social */}
          <div>
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-4 border-b border-white/20 pb-2">
              {language === 'mr' ? 'अधिकृत संपर्क' : 'Official Contact'}
            </h4>

            <div className="space-y-2.5 text-xs text-amber-100/90">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">
                  {language === 'mr' ? 'अध्यक्ष:' : language === 'hi' ? 'अध्यक्ष:' : 'President:'}{' '}
                  <span className="text-amber-300">{language === 'en' ? 'Sachin Manjrekar' : 'सचिन मांजरेकर'}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <a href="tel:+917977867266" className="text-white font-bold hover:text-amber-300 transition-colors">
                  7977867266
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <a href="mailto:saiashishmitramandal@gmail.com" className="text-amber-200 hover:underline break-all">
                  saiashishmitramandal@gmail.com
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={MANDAL_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-bold shadow-sm hover:opacity-95 transition-opacity"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>{MANDAL_INFO.social.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Devotional note */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-200/80 text-center sm:text-left">
          <p>© 2025 {MANDAL_INFO.name[language]}. {t.common.copyright}</p>
          <p className="flex items-center justify-center gap-1 text-[11px] text-amber-200/90">
            <span>{t.common.developedWithDevotion}</span>
            <Heart className="w-3 h-3 text-amber-300 fill-current inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
