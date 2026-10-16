import type { Metadata } from 'next';
import { Noto_Sans_Devanagari, Montserrat } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBanner from '@/components/AnnouncementBanner';

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
    default: 'श्री साई आशिष मित्र मंडळ | Shree Sai Ashish Mitra Mandal - Bhayandar (E)',
    template: '%s | श्री साई आशिष मित्र मंडळ',
  },
  description:
    'अधिकृत संकेतस्थळ: श्री साई आशिष मित्र मंडळ, सार्वजनिक गणेशोत्सव, भाईंदर (पूर्व), ठाणे. स्थापना २०१५. थेट दर्शन, फोटो गॅलरी, व सामाजिक कार्य.',
  keywords: [
    'Shree Sai Ashish Mitra Mandal',
    'श्री साई आशिष मित्र मंडळ',
    'Sai Ashish Mitra Mandal Bhayandar',
    'नर्मदा नगरचा श्री',
    'Ganeshotsav Bhayandar',
    'Ganpati Darshan',
    'Balaji Avatar Ganpati',
    'Mumbai Ganpati Mandal',
    'Sarvajanik Ganeshotsav',
  ],
  authors: [{ name: 'Shree Sai Ashish Mitra Mandal' }],
  creator: 'Shree Sai Ashish Mitra Mandal',
  publisher: 'Shree Sai Ashish Mitra Mandal',
  openGraph: {
    title: 'श्री साई आशिष मित्र मंडळ | Shree Sai Ashish Mitra Mandal',
    description:
      'सार्वजनिक गणेशोत्सव • स्थापना २०१५ • भाईंदर (पूर्व), ठाणे. दर्शन घ्या, व उत्सव छायाचित्रे अनुभवा.',
    url: 'https://saiashishmitramandal.org',
    siteName: 'श्री साई आशिष मित्र मंडळ',
    images: [
      {
        url: '/images/murti-main.svg',
        width: 1200,
        height: 630,
        alt: 'श्री साई आशिष मित्र मंडळ - गणेश मूर्ती दर्शन',
      },
    ],
    locale: 'mr_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'श्री साई आशिष मित्र मंडळ | Shree Sai Ashish Mitra Mandal',
    description: 'सार्वजनिक गणेशोत्सव • स्थापना २०१५ • भाईंदर (पूर्व). मंगल दर्शन व माहिती.',
    images: ['/images/murti-main.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HinduTemple',
    name: 'Shree Sai Ashish Mitra Mandal',
    alternateName: 'श्री साई आशिष मित्र मंडळ',
    description:
      'Sarvajanik Ganeshotsav Mandal in Bhayandar East, Thane, established in 2015 by local youth volunteers.',
    url: 'https://saiashishmitramandal.org',
    foundingDate: '2015',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bhayandar (East), Mira-Bhayandar',
      addressRegion: 'Thane, Maharashtra',
      postalCode: '401105',
      addressCountry: 'IN',
    },
    sameAs: ['https://www.instagram.com/saiashishmitramandal/'],
  };

  return (
    <html
      lang="mr"
      className={`${devanagariFont.variable} ${montserratFont.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-mandap-pattern text-charcoal-800 antialiased selection:bg-gold-500 selection:text-white">
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
