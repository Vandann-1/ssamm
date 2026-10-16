'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MANDAL_INFO } from '@/content/mandalData';
import Emblem from '@/components/Emblem';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  Train,
  UserCheck,
} from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '@/components/SocialIcons';

export default function ContactPage() {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col w-full py-8 sm:py-14 px-4 sm:px-6 max-w-5xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#900002] uppercase block">
          ॥ {MANDAL_INFO.greeting[language]} ॥
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-devanagari">
          {t.contact.pageTitle}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          {language === 'mr'
            ? 'श्री साई आशिष मित्र मंडळाच्या दर्शनासाठी, मंडप स्थानासाठी व अधिकृत संपर्कासाठी खालील माहिती वापरा.'
            : language === 'hi'
            ? 'श्री साई आशीष मित्र मंडल के दर्शन, मंडप स्थान एवं आधिकारिक संपर्क के लिए निम्न जानकारी देखें।'
            : 'Official contact details, mandap location, and darshan guide for Shree Sai Ashish Mitra Mandal.'}
        </p>
      </div>

      {/* Primary Contact Channels (Cards: Phone, WhatsApp, Email, Instagram) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1. Phone Call */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#900002] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 block">
                {language === 'mr' ? 'संपर्क क्रमांक' : 'Phone Number'}
              </span>
              <a
                href="tel:+917977867266"
                className="text-base sm:text-lg font-black text-slate-950 hover:text-[#900002] transition-colors"
              >
                7977867266
              </a>
            </div>
          </div>
          <a
            href="tel:+917977867266"
            className="w-full py-2 px-3 rounded-lg bg-[#900002] hover:bg-[#720002] text-white text-xs font-bold text-center transition-colors"
          >
            {language === 'mr' ? 'कॉल करा' : 'Call Now'}
          </a>
        </div>

        {/* 2. WhatsApp Direct */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <WhatsAppIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 block">
                WhatsApp
              </span>
              <a
                href={MANDAL_INFO.social.whatsappInquiry}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-black text-slate-950 hover:text-emerald-600 transition-colors"
              >
                7977867266
              </a>
            </div>
          </div>
          <a
            href={MANDAL_INFO.social.whatsappInquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold text-center transition-colors"
          >
            {language === 'mr' ? 'व्हॉट्सॲपवर बोला' : 'Chat on WhatsApp'}
          </a>
        </div>

        {/* 3. Official Email */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 block">
                {language === 'mr' ? 'अधिकृत ईमेल' : 'Official Email'}
              </span>
              <a
                href="mailto:saiashishmitramandal@gmail.com"
                className="text-xs sm:text-sm font-bold text-slate-950 hover:text-[#900002] transition-colors break-all block"
              >
                saiashishmitramandal@gmail.com
              </a>
            </div>
          </div>
          <a
            href="mailto:saiashishmitramandal@gmail.com"
            className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center transition-colors"
          >
            {language === 'mr' ? 'ईमेल पाठवा' : 'Send Email'}
          </a>
        </div>

        {/* 4. Official Instagram */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 block">
                Instagram
              </span>
              <a
                href={MANDAL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold text-slate-950 hover:text-pink-600 transition-colors"
              >
                {MANDAL_INFO.social.instagramHandle}
              </a>
            </div>
          </div>
          <a
            href={MANDAL_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-bold text-center transition-opacity hover:opacity-90"
          >
            {language === 'mr' ? 'फॉलो करा' : 'Follow'}
          </a>
        </div>
      </div>

      {/* Leadership & President Card */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#900002] uppercase tracking-wider">
          <UserCheck className="w-4 h-4" />
          <span>{language === 'mr' ? 'मंडळ प्रमुख व संपर्क' : 'Mandal Representative'}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-slate-500 block">
              {language === 'mr' ? 'अध्यक्ष' : language === 'hi' ? 'अध्यक्ष' : 'President'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-devanagari">
              {language === 'en' ? 'Sachin Manjrekar' : 'सचिन मांजरेकर'}
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              {MANDAL_INFO.name[language]} • {t.common.estdBadge}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+917977867266"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold text-xs hover:border-[#900002] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#900002]" />
              <span>+91 79778 67266</span>
            </a>
            <a
              href="mailto:saiashishmitramandal@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold text-xs hover:border-[#900002] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-600" />
              <span>saiashishmitramandal@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Address & Mandap Location Details + Google Maps */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Location & Timings Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <Emblem size="md" />
              <div>
                <h2 className="font-black text-base text-slate-900">
                  {t.contact.mandapLocationTitle}
                </h2>
                <span className="text-xs text-slate-500 font-medium">
                  {language === 'mr' ? 'सार्वजनिक गणेशोत्सव मंडप' : 'Sarvajanik Festival Mandap'}
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#900002] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">
                    {MANDAL_INFO.location.addressLine[language]}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {MANDAL_INFO.location.city}, {MANDAL_INFO.location.district}, {MANDAL_INFO.location.state} - 401105
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#900002] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">{t.common.darshanTimingsLabel}:</p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {MANDAL_INFO.contact.darshanTimings[language]}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Train className="w-4 h-4 text-[#900002] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">{t.contact.directionsTitle}:</p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    {MANDAL_INFO.location.directionsNote[language]}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={MANDAL_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors"
              >
                <span>{t.contact.openInMaps}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Interactive Google Maps Embed */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="p-3.5 bg-slate-900 text-white text-xs font-bold flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'mr' ? 'स्थान नकाशा (भाईंदर पूर्व)' : 'Location Map (Bhayandar East)'}</span>
              </span>
              <span className="text-[11px] text-slate-400 font-normal">Mira-Bhayandar, Thane</span>
            </div>
            <div className="relative w-full aspect-16/11 bg-slate-100">
              <iframe
                title="Shree Sai Ashish Mitra Mandal Location Map"
                src="https://maps.google.com/maps?q=Bhayandar+East+Thane+Maharashtra&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
