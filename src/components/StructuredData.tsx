import React from 'react';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['NGO', 'PlaceOfWorship', 'CommunityOrganization'],
    '@id': 'https://saiashishmitramandal.org/#organization',
    name: 'Shree Sai Ashish Mitra Mandal',
    alternateName: [
      'श्री साई आशिष मित्र मंडळ',
      'Sai Ashish Mitra Mandal',
      'SSAMM',
      'नर्मदा नगरचा श्री',
      'Sai Ashish Mandal Bhayandar',
    ],
    url: 'https://saiashishmitramandal.org',
    logo: 'https://saiashishmitramandal.org/images/logo.png',
    image: [
      'https://saiashishmitramandal.org/images/official-banner.jpg',
      'https://saiashishmitramandal.org/images/murti-main.jpg',
    ],
    description:
      'अधिकृत संकेतस्थळ: श्री साई आशिष मित्र मंडळ, सार्वजनिक गणेशोत्सव, भाईंदर (पूर्व), ठाणे. स्थापना २०१५ (सन २०२५ - १५ वे वर्ष). अध्यक्ष: सचिन मांजरेकर. Official website of Shree Sai Ashish Mitra Mandal, Sarvajanik Ganeshotsav, Bhayandar East, Thane, Maharashtra.',
    foundingDate: '2015',
    founder: {
      '@type': 'Person',
      name: 'Sachin Manjrekar',
      jobTitle: 'President (अध्यक्ष)',
    },
    president: {
      '@type': 'Person',
      name: 'Sachin Manjrekar',
      jobTitle: 'President (अध्यक्ष)',
      telephone: '+917977867266',
      email: 'saiashishmitramandal@gmail.com',
    },
    telephone: '+917977867266',
    email: 'saiashishmitramandal@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Narmada Nagar, Sai Ashish Vicinity',
      addressLocality: 'Bhayandar (East), Mira-Bhayandar',
      addressRegion: 'Maharashtra',
      postalCode: '401105',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.2945,
      longitude: 72.858,
    },
    sameAs: [
      'https://www.instagram.com/saiashishmitramandal/',
    ],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Mira-Bhayandar, Thane, Maharashtra',
    },
    knowsLanguage: ['mr', 'en', 'hi'],
  };

  const festivalEventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Festival',
    '@id': 'https://saiashishmitramandal.org/#festival-2025',
    name: 'Shree Sai Ashish Mitra Mandal Sarvajanik Ganeshotsav 2025 (15th Year)',
    alternateName: 'श्री साई आशिष मित्र मंडळ सार्वजनिक गणेशोत्सव २०२५ (१५ वे वर्ष)',
    description:
      'Annual 10-day Sarvajanik Ganeshotsav celebration in Bhayandar East, Thane, featuring the sacred Ganpati murti darshan, cultural initiatives, and community service.',
    startDate: '2025-08-27T06:00:00+05:30',
    endDate: '2025-09-06T22:00:00+05:30',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Shree Sai Ashish Mitra Mandal Utsav Mandap',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Narmada Nagar, Sai Ashish Vicinity, Bhayandar East',
        addressLocality: 'Bhayandar East',
        addressRegion: 'Maharashtra',
        postalCode: '401105',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.2945,
        longitude: 72.858,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Shree Sai Ashish Mitra Mandal',
      url: 'https://saiashishmitramandal.org',
      telephone: '+917977867266',
    },
    isAccessibleForFree: true,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'श्री साई आशिष मित्र मंडळ कोठे आहे? (Where is Shree Sai Ashish Mitra Mandal located?)',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'श्री साई आशिष मित्र मंडळ नर्मदा नगर / साई आशिष परिसर, भाईंदर (पूर्व), ठाणे - ४०११०५, महाराष्ट्र येथे स्थित आहे. हे स्थान भाईंदर पूर्व रेल्वे स्थानकावरून रिक्षाने १० मिनिटांच्या अंतरावर आहे.',
        },
      },
      {
        '@type': 'Question',
        name: 'श्री साई आशिष मित्र मंडळाचे अध्यक्ष कोण आहेत? (Who is the President of Shree Sai Ashish Mitra Mandal?)',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'श्री साई आशिष मित्र मंडळाचे अधिकृत अध्यक्ष सचिन मांजरेकर (Sachin Manjrekar) आहेत. त्यांच्या मार्गदर्शनाखाली स्थानिक युवा कार्यकर्ते गणेशोत्सवाचे आयोजन करतात.',
        },
      },
      {
        '@type': 'Question',
        name: 'श्री साई आशिष मित्र मंडळाची स्थापना कधी झाली? (When was Shree Sai Ashish Mitra Mandal established?)',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'मंडळाची स्थापना सन २०१५ मध्ये स्थानिक युवा कार्यकर्त्यांनी केली. सन २०२५ मध्ये मंडळ आपले १५ वे वर्ष (15th Year) साजरे करत आहे.',
        },
      },
      {
        '@type': 'Question',
        name: 'श्री साई आशिष मित्र मंडळाशी संपर्क कसा साधावा? (How to contact Shree Sai Ashish Mitra Mandal?)',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'मंडळाशी थेट फोन क्रमांक +91 7977867266, ईमेल saiashishmitramandal@gmail.com किंवा अधिकृत इन्स्टाग्राम @saiashishmitramandal द्वारे संपर्क साधता येतो.',
        },
      },
      {
        '@type': 'Question',
        name: 'गणपती दर्शनाची वेळ काय आहे? (What are the Ganpati Darshan timings?)',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'गणेशोत्सवादरम्यान भाविकांसाठी दर्शन दररोज सकाळी ६:०० ते रात्री ११:३० पर्यंत खुले असते.',
        },
      },
    ],
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'मुख्यपृष्ठ (Home)',
        item: 'https://saiashishmitramandal.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'दर्शन (Darshan)',
        item: 'https://saiashishmitramandal.org/darshan',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'छायाचित्रे (Gallery)',
        item: 'https://saiashishmitramandal.org/gallery',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'उत्सव (Utsav)',
        item: 'https://saiashishmitramandal.org/utsav',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'आमच्याबद्दल (About Us)',
        item: 'https://saiashishmitramandal.org/about',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'सामाजिक कार्य (Social Work)',
        item: 'https://saiashishmitramandal.org/social-work',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'संपर्क (Contact)',
        item: 'https://saiashishmitramandal.org/contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(festivalEventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
    </>
  );
}
