import type { Metadata } from 'next';
import { Noto_Sans_Devanagari, Montserrat } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import StructuredData from '@/components/StructuredData';

const devanagariFont = Noto_Sans_Devanagari({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-devanagari',
  display: 'swap',
});

const montserratFont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saiashishmitramandal.org'),
  title: {
    default: 'श्री साई आशिष मित्र मंडळ | Shree Sai Ashish Mitra Mandal - Bhayandar (East)',
    template: '%s | श्री साई आशिष मित्र मंडळ',
  },
  description:
    'अधिकृत संकेतस्थळ: श्री साई आशिष मित्र मंडळ, सार्वजनिक गणेशोत्सव, भाईंदर (पूर्व), ठाणे - ४०११०५. स्थापना २०१५ (सन २०२५ - १५ वे वर्ष). अध्यक्ष: सचिन मांजरेकर. थेट दर्शन, फोटो गॅलरी, व अधिकृत माहिती.',
  keywords: [
    'Shree Sai Ashish Mitra Mandal',
    'श्री साई आशिष मित्र मंडळ',
    'Sai Ashish Mitra Mandal',
    'Sai Ashish Mitra Mandal Bhayandar',
    'सचिन मांजरेकर',
    'Sachin Manjrekar',
    '7977867266',
    'saiashishmitramandal@gmail.com',
    'नर्मदा नगरचा श्री',
    'Narmada Nagar Ganpati',
    'Bhayandar East Ganpati Mandal',
    'Ganeshotsav Bhayandar',
    'Sarvajanik Ganeshotsav 2025',
    'Mira Bhayandar Ganpati Darshan',
    'Thane Ganpati Mandal',
    'Balaji Avatar Ganpati Bhayandar',
  ],
  authors: [{ name: 'Shree Sai Ashish Mitra Mandal' }],
  creator: 'Shree Sai Ashish Mitra Mandal',
  publisher: 'Shree Sai Ashish Mitra Mandal',
  alternates: {
    canonical: 'https://saiashishmitramandal.org',
    languages: {
      'mr-IN': 'https://saiashishmitramandal.org',
      'en-US': 'https://saiashishmitramandal.org',
      'hi-IN': 'https://saiashishmitramandal.org',
    },
  },
  openGraph: {
    title: 'श्री साई आशिष मित्र मंडळ | Shree Sai Ashish Mitra Mandal',
    description:
      'सार्वजनिक गणेशोत्सव • स्थापना २०१५ (१५ वे वर्ष) • भाईंदर (पूर्व), ठाणे. अध्यक्ष: सचिन मांजरेकर. थेट दर्शन, छायाचित्रे व उत्सव माहिती.',
    url: 'https://saiashishmitramandal.org',
    siteName: 'श्री साई आशिष मित्र मंडळ',
    images: [
      {
        url: '/images/official-banner.jpg',
        width: 1024,
        height: 405,
        alt: 'श्री साई आशिष मित्र मंडळ - अधिकृत बॅनर',
      },
      {
        url: '/images/murti-main.jpg',
        width: 800,
        height: 600,
        alt: 'श्री साई आशिष मित्र मंडळ - गणेश मूर्ती दर्शन',
      },
    ],
    locale: 'mr_IN',
    alternateLocale: ['hi_IN', 'en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'श्री साई आशिष मित्र मंडळ | Shree Sai Ashish Mitra Mandal',
    description:
      'सार्वजनिक गणेशोत्सव • स्थापना २०१५ • भाईंदर (पूर्व), ठाणे. अध्यक्ष: सचिन मांजरेकर. संपर्क: 7977867266.',
    images: ['/images/official-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Bhayandar East, Thane, Maharashtra',
    'geo.position': '19.2945;72.8580',
    'ICBM': '19.2945, 72.8580',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="mr"
      className={`${devanagariFont.variable} ${montserratFont.variable} h-full scroll-smooth`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased selection:bg-[#900002] selection:text-white">
        <LanguageProvider>
          <AnnouncementBanner />
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
