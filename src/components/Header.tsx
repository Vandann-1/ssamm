'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { MANDAL_INFO } from '../content/mandalData';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';
import {
  Menu,
  X,
  Eye,
  Calendar,
  Image as ImageIcon,
  HeartHandshake,
  Users,
  MapPin,
  Home,
  ChevronRight,
} from 'lucide-react';

export default function Header() {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t.nav.home, icon: Home },
    { href: '/darshan', label: t.nav.darshan, icon: Eye, badge: true },
    { href: '/gallery', label: t.nav.gallery, icon: ImageIcon },
    { href: '/utsav', label: t.nav.utsav, icon: Calendar },
    { href: '/about', label: t.nav.about, icon: Users },
    { href: '/social-work', label: t.nav.socialWork, icon: HeartHandshake },
    { href: '/contact', label: t.nav.contact, icon: MapPin },
  ];

  return (
    <header className="relative w-full z-40 shadow-sm">
      {/* =========================================================================
          1. BAPPA HEADER BANNER (DESKTOP & MOBILE - INSPIRED BY LALBAUGCHARAJA)
          ========================================================================= */}
      <div className="w-full bg-[#150204] border-b border-[#5e0002] flex justify-center select-none overflow-hidden">
        <div className="w-full max-w-7xl relative aspect-[1024/405] max-h-[280px] sm:max-h-[340px] lg:max-h-[380px]">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full h-full relative"
            aria-label="श्री साई आशिष मित्र मंडळ"
          >
            <Image
              src="/images/official-banner.jpg"
              alt="श्री साई आशिष मित्र मंडळ - अधिकृत बॅनर"
              fill
              className="object-contain w-full h-full"
              priority
            />
          </Link>

          {/* Quick Action Pill on Banner (Mobile) */}
          <div className="sm:hidden absolute top-2 right-2 flex items-center gap-1.5 z-20">
            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-1.5 py-1 rounded-full border border-white/20">
              <a
                href={MANDAL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-full text-white hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={MANDAL_INFO.social.whatsappInquiry}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-full text-white hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. SOLID DEVOTIONAL CRIMSON (#900002) NAVIGATION BAR
          ========================================================================= */}
      <div className="bg-[#900002] text-white border-t border-[#a60b0e] border-b border-[#630001] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14">
            {/* Desktop Horizontal Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Desktop Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-150 relative ${
                      isActive
                        ? 'text-amber-300 font-bold border-b-2 border-amber-300'
                        : 'text-white hover:text-amber-200 hover:bg-white/10 rounded-md'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Controls (Menu button on left + Language on right) */}
            <div className="flex lg:hidden items-center justify-between w-full">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/25 hover:bg-black/40 text-white font-bold text-xs border border-white/20 transition-all cursor-pointer"
                aria-label="Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 text-amber-300" />
                ) : (
                  <Menu className="w-4 h-4 text-amber-300" />
                )}
                <span>{language === 'mr' ? 'मेनू' : 'Menu'}</span>
              </button>

              <div className="flex items-center gap-2">
                <LanguageSwitcher variant="crimson" />
              </div>
            </div>

            {/* Desktop Right Side: Language Switcher & Social */}
            <div className="hidden lg:flex items-center gap-4 shrink-0 text-xs">
              <LanguageSwitcher variant="crimson" />

              <div className="h-4 w-px bg-white/20" />

              <div className="flex items-center gap-2">
                <a
                  href={MANDAL_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-white/90 hover:text-amber-300 hover:bg-white/10 transition-colors"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href={MANDAL_INFO.social.whatsappInquiry}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-white/90 hover:text-amber-300 hover:bg-white/10 transition-colors"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. MOBILE SLIDEOUT DRAWER MENU
          ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[auto] z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-start">
          <div className="bg-white border-b-4 border-[#900002] shadow-2xl px-5 pt-4 pb-6 max-h-[80vh] overflow-y-auto animate-fadeIn space-y-4">
            <div className="pb-3 border-b border-slate-200 flex items-center justify-between">
              <span className="font-extrabold text-sm text-[#900002]">
                {language === 'mr' ? 'श्री साई आशिष मित्र मंडळ' : 'Shree Sai Ashish Mitra Mandal'}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-slate-800" />
              </button>
            </div>

            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#900002] text-white font-bold shadow-xs'
                        : 'text-slate-800 hover:bg-slate-50 bg-white border border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-[#900002]'}`} />
                      <span>{link.label}</span>
                    </div>

                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <a
                href={MANDAL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-700 hover:text-[#900002] font-semibold"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600" />
                <span>Instagram</span>
              </a>
              <a
                href={MANDAL_INFO.social.whatsappInquiry}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-700 hover:text-emerald-600 font-semibold"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
