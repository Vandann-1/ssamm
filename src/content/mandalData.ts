import { Announcement, AartiSchedule, FestivalEvent, GalleryItem, SocialInitiative } from '../types';

export const MANDAL_INFO = {
  name: {
    mr: 'श्री साई आशिष मित्र मंडळ',
    en: 'Shree Sai Ashish Mitra Mandal',
    hi: 'श्री साई आशीष मित्र मंडल',
  },
  tagline: {
    mr: 'सार्वजनिक गणेशोत्सव • स्थापना २०१५ • युवा शक्ती, समाज प्रबोधन आणि भक्ती',
    en: 'Sarvajanik Ganeshotsav • Estd. 2015 • Devotion, Youth Energy & Community Service',
    hi: 'सार्वजनिक गणेशोत्सव • स्थापना २०१५ • युवा शक्ति, समाज प्रबोधन एवं भक्ति',
  },
  greeting: {
    mr: 'गणपती बाप्पा मोरया! मंगलमूर्ती मोरया!',
    en: 'Ganpati Bappa Morya! Mangal Murti Morya!',
    hi: 'गणपति बप्पा मोरया! मंगलमूर्ति मोरया!',
  },
  establishedYear: 2015,
  managedBy: {
    mr: 'स्थानिक युवा कार्यकर्ते व भाविक भक्तगण',
    en: 'Local Youth Volunteers & Devotees',
    hi: 'स्थानीय युवा कार्यकर्ता एवं श्रद्धालु भक्तगण',
  },
  location: {
    city: 'Bhayandar (East), Mira-Bhayandar',
    district: 'Thane',
    state: 'Maharashtra',
    country: 'India',
    addressLine: {
      mr: 'नर्मदा नगर / साई आशिष परिसर, भाईंदर (पूर्व), ठाणे - ४०११०५',
      en: 'Narmada Nagar / Sai Ashish Vicinity, Bhayandar (East), Thane - 401105',
      hi: 'नर्मदा नगर / साई आशीष परिसर, भायंदर (पूर्व), ठाणे - ४०११०५',
    },
    googleMapsUrl: 'https://maps.google.com/?q=Bhayandar+East+Thane',
    directionsNote: {
      mr: 'भाईंदर पूर्व रेल्वे स्थानकावरून रिक्षाने १० मिनिटांच्या अंतरावर.',
      en: '10 minutes by auto-rickshaw from Bhayandar East Railway Station.',
      hi: 'भायंदर पूर्व रेलवे स्टेशन से ऑटो-रिक्शा द्वारा १० मिनट की दूरी पर।',
    },
  },
  social: {
    instagram: 'https://www.instagram.com/saiashishmitramandal/',
    instagramHandle: '@saiashishmitramandal',
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
    whatsappInquiry: 'https://wa.me/917977867266?text=Ganpati%20Bappa%20Morya',
  },
  contact: {
    email: 'saiashishmitramandal@gmail.com',
    phone: '+91 79778 67266',
    rawPhone: '7977867266',
    president: {
      title: {
        mr: 'अध्यक्ष',
        en: 'President',
        hi: 'अध्यक्ष',
      },
      name: {
        mr: 'सचिन मांजरेकर',
        en: 'Sachin Manjrekar',
        hi: 'सचिन मांजरेकर',
      },
    },
    darshanTimings: {
      mr: 'सकाळी ६:०० ते रात्री ११:३० पर्यंत',
      en: '6:00 AM to 11:30 PM daily during Ganeshotsav',
      hi: 'सुबह ६:०० से रात ११:३० बजे तक',
    },
    vipPassAvailable: false,
    prasadAvailable: true,
  },
  themeHighlight: {
    year: 2024,
    themeName: {
      mr: 'श्री बालाजी अवतार स्वरूप',
      en: 'Shree Balaji Avatar Theme',
      hi: 'श्री बालाजी अवतार स्वरूप',
    },
    description: {
      mr: 'तिरुपती बालाजींच्या दिव्य रूपातील देखणी गणेश मूर्ती आणि भव्य मंदिर सजावट भाविकांच्या आकर्षणाचे मुख्य केंद्र ठरली.',
      en: 'The divine Ganpati murti adorned in Tirupati Balaji avatar accompanied by traditional temple decor became the devotional highlight.',
      hi: 'तिरुपति बालाजी के दिव्य स्वरूप में सुंदर गणेश प्रतिमा एवं भव्य मंदिर सजावट श्रद्धालुओं के विशेष आकर्षण का केंद्र रही।',
    },
  },
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    date: '2025-08-15',
    badge: {
      mr: 'नवीन घोषणा',
      en: 'Latest Update',
      hi: 'नवीन सूचना',
    },
    title: {
      mr: 'आगामी गणेशोत्सव तयारी व मंडप बांधणी सुरू',
      en: 'Ganeshotsav Preparations & Mandap Setup Underway',
      hi: 'आगामी गणेशोत्सव तैयारी एवं मंडप निर्माण प्रारंभ',
    },
    details: {
      mr: 'यंदाच्या भव्य गणेशोत्सवाची पूर्वतयारी मंडळातील युवा कार्यकर्त्यांच्या पुढाकाराने उत्साहात सुरू झाली आहे. सर्व भाविक भक्तांचे सहकार्य लाभत आहे.',
      en: 'Preparations for this year’s Ganeshotsav have commenced with immense enthusiasm led by our youth volunteers.',
      hi: 'इस वर्ष के भव्य गणेशोत्सव की प्रारंभिक तैयारियां मंडल के युवा कार्यकर्ताओं के नेतृत्व में उत्साहपूर्वक प्रारंभ हो चुकी हैं।',
    },
  },
  {
    id: 'ann-2',
    date: '2024-09-07',
    badge: {
      mr: 'दर्शन सुविधा',
      en: 'Darshan Guide',
      hi: 'दर्शन सुविधा',
    },
    title: {
      mr: 'भाविकांसाठी सुलभ दर्शन व महाप्रसाद व्यवस्था',
      en: 'Streamlined Queue & Mahaprasad Arrangements for Devotees',
      hi: 'श्रद्धालुओं के लिए सुगम दर्शन एवं महाप्रसाद व्यवस्था',
    },
    details: {
      mr: 'ज्येष्ठ नागरिक, महिला व बालकांसाठी स्वतंत्र दर्शनाची सोय व पिण्याच्या पाण्याची चोख व्यवस्था करण्यात आली आहे.',
      en: 'Separate senior citizen queues, dedicated volunteer assistance, and drinking water arrangements have been organized.',
      hi: 'वरिष्ठ नागरिकों, महिलाओं एवं बच्चों के लिए अलग दर्शन व्यवस्था तथा पेयजल का सुचारु प्रबंध किया गया है।',
    },
  },
  {
    id: 'ann-3',
    date: '2024-09-12',
    badge: {
      mr: 'सामाजिक उपक्रम',
      en: 'Community Drive',
      hi: 'सामाजिक पहल',
    },
    title: {
      mr: 'परिसर स्वच्छता अभियान आणि पर्यावरणपूरक संदेश',
      en: 'Cleanliness Drive & Eco-Friendly Festival Awareness',
      hi: 'परिसर स्वच्छता अभियान एवं पर्यावरण अनुकूल संदेश',
    },
    details: {
      mr: 'उत्सवाच्या काळात दररोज रात्री मंडप व परिसराची स्वच्छता करण्यात येते. भाविकांनी निर्माल्य योग्य कुंडीतच टाकावे.',
      en: 'Volunteers conduct daily post-darshan sanitization and cleanliness drives around the mandap. Dedicated bins provided for nirmalya.',
      hi: 'उत्सव के दौरान प्रतिदिन रात को मंडप व आसपास के परिसर की स्वच्छता की जाती है। श्रद्धालु निर्माल्य नियत स्थान पर ही अर्पित करें।',
    },
  },
];

export const AARTI_SCHEDULE: AartiSchedule[] = [
  {
    id: 'aarti-1',
    name: {
      mr: 'सकाळची महाआरती',
      en: 'Morning Maha Aarti',
      hi: 'प्रातः महाआरती',
    },
    time: '०८:०० AM',
    description: {
      mr: 'सुप्रभात मंगल दर्शन आणि श्री गणेशाची पंचारती',
      en: 'Morning auspicious darshan with traditional Vedic mantras',
      hi: 'सुप्रभात मंगल दर्शन एवं श्री गणेश की पंचारती',
    },
    significance: {
      mr: 'दिवसाची मंगल सुरुवात, सर्व भाविकांना उपस्थित राहता येते.',
      en: 'Auspicious start to the day open to all neighborhood families.',
      hi: 'दिन की मंगल शुरुआत, सभी श्रद्धालुओं के लिए सुलभ।',
    },
  },
  {
    id: 'aarti-2',
    name: {
      mr: 'दुपारची आरती व महानैवेद्य',
      en: 'Afternoon Aarti & Naivedya',
      hi: 'दोपहर आरती एवं महानैवेद्य',
    },
    time: '१२:३० PM',
    description: {
      mr: 'बाप्पांना मोदक व सात्विक महानैवेद्य अर्पण',
      en: 'Offering of sacred modak and mahaprasad to Bappa',
      hi: 'बाप्पा को मोदक एवं सात्विक महानैवेद्य का भोग',
    },
    significance: {
      mr: 'नैवेद्यानंतर भाविकांना प्रसादाचे वाटप केले जाते.',
      en: 'Prasad distribution to queued visitors follows immediately.',
      hi: 'भोग के पश्चात श्रद्धालुओं को प्रसाद वितरित किया जाता है।',
    },
  },
  {
    id: 'aarti-3',
    name: {
      mr: 'सायंकाळची भव्य महाआरती',
      en: 'Grand Evening Maha Aarti',
      hi: 'भव्य सांध्य महाआरती',
    },
    time: '०८:०० PM',
    description: {
      mr: 'टाळ, मृदुंग व वाद्यांच्या गजरात मुख्य सामूहिक आरती',
      en: 'Flagship daily community aarti with devotional musical chants',
      hi: 'ताल, मृदंग व वाद्य-घोष के साथ मुख्य सामूहिक आरती',
    },
    significance: {
      mr: 'उत्सवातील सर्वात मोठी गर्दी व उत्साहपूर्ण सोहळा.',
      en: 'Highest community gathering with electric devotional fervor.',
      hi: 'उत्सव की सबसे बड़ी उपस्थिति और भक्तिमय वातावरण।',
    },
  },
  {
    id: 'aarti-4',
    name: {
      mr: 'शेजारती',
      en: 'Night Shej Aarti',
      hi: 'रात्रि शयन आरती',
    },
    time: '११:०० PM',
    description: {
      mr: 'दिवसभराच्या दर्शनानंतर बाप्पांची शांत व भक्तिमय शेजारती',
      en: 'Serene closing prayers concluding the daily festival schedule',
      hi: 'दिनभर के दर्शन के पश्चात बाप्पा की शांत व भावपूर्ण शेजारती',
    },
    significance: {
      mr: 'दिवसाच्या सांगतेची शांती व समाधान देणारी आरती.',
      en: 'Quiet, reverent conclusion of the day.',
      hi: 'दिन की पूर्णता की शांति एवं तृप्तिदायक आरती।',
    },
  },
];

export const FESTIVAL_EVENTS: FestivalEvent[] = [
  {
    id: 'event-1',
    dayNumber: 1,
    date: 'भाद्रपद शुक्ल चतुर्थी',
    title: {
      mr: 'श्रींचे आगमन सोहळा व प्राणप्रतिष्ठा',
      en: 'Aagaman Sohala & Murti Sthapana',
      hi: 'श्री आगमन सोहळा एवं प्राणप्रतिष्ठा',
    },
    time: 'सकाळी १०:०० वा.',
    location: {
      mr: 'साई आशिष उत्सव मंडप',
      en: 'Sai Ashish Utsav Mandap',
      hi: 'साई आशीष उत्सव मंडप',
    },
    description: {
      mr: 'ढोल-ताशांच्या गजरात व गुलालाच्या उधळणीत बाप्पांचे वाजत-गाजत स्वागत, त्यानंतर वेदमंत्रांच्या घोषात प्राणप्रतिष्ठा पूजा.',
      en: 'Welcoming Bappa with traditional dhol-tasha beats, followed by sacred Vedic rituals and installation pooja.',
      hi: 'ढोल-ताशों की गूंज और गुलाल की वर्षा के साथ बाप्पा का भव्य स्वागत, तत्पश्चात वैदिक प्राणप्रतिष्ठा पूजा।',
    },
    highlight: true,
    category: 'aagaman',
  },
  {
    id: 'event-2',
    dayNumber: 3,
    date: 'भाद्रपद शुक्ल षष्ठी',
    title: {
      mr: 'सामूहिक अथर्वशीर्ष पठण व भजन संध्या',
      en: 'Atharvashirsha Chanting & Bhajan Sandhya',
      hi: 'सामूहिक अथर्वशीर्ष पाठ एवं भजन संध्या',
    },
    time: 'सायंकाळी ६:३० वा.',
    location: {
      mr: 'मुख्य मंडप',
      en: 'Main Pandal',
      hi: 'मुख्य मंडप',
    },
    description: {
      mr: 'स्थानिक महिला मंडळ व युवा भाविकांद्वारे १०८ आवर्तने अथर्वशीर्ष पठण आणि स्थानिक कलाकारांचे भक्तिगीत सादरीकरण.',
      en: '108 recitations of Ganapati Atharvashirsha by community members followed by devotional musical evening.',
      hi: 'स्थानीय महिला मंडल एवं युवा भक्तों द्वारा १०८ बार अथर्वशीर्ष पाठ और भक्ति संगीत का कार्यक्रम।',
    },
    category: 'cultural',
  },
  {
    id: 'event-3',
    dayNumber: 5,
    date: 'भाद्रपद शुक्ल अष्टमी',
    title: {
      mr: 'श्री सत्यनारायण महापूजा व महाप्रसाद',
      en: 'Shree Satyanarayan Mahapooja & Mahaprasad',
      hi: 'श्री सत्यनारायण महापूजा एवं महाप्रसाद',
    },
    time: 'दुपारी १२:०० वा.',
    location: {
      mr: 'मंडप परिसर',
      en: 'Pandal Premises',
      hi: 'मंडप परिसर',
    },
    description: {
      mr: 'वार्षिक सत्यनारायण पूजा, तीर्थ प्रसादाचे वाटप व हजारो भाविकांसाठी अन्नछत्र / महाप्रसाद वाटप.',
      en: 'Annual Satyanarayan Pooja followed by holy prasad and community feast served to thousands of visiting devotees.',
      hi: 'वार्षिक सत्यनारायण पूजा, तीर्थ प्रसाद वितरण और हजारों श्रद्धालुओं के लिए महाप्रसाद भंडारा।',
    },
    highlight: true,
    category: 'pooja',
  },
  {
    id: 'event-4',
    dayNumber: 7,
    date: 'भाद्रपद शुक्ल दशमी',
    title: {
      mr: 'बाल व युवा कलागुण गौरव आणि बक्षीस वितरण',
      en: 'Children & Youth Talent Showcase',
      hi: 'बाल एवं युवा प्रतिभा सम्मान व पुरस्कार वितरण',
    },
    time: 'संध्याकाळी ७:०० वा.',
    location: {
      mr: 'रंगमंच, मंडप परिसर',
      en: 'Community Stage',
      hi: 'सामुदायिक मंच',
    },
    description: {
      mr: 'चित्रकला, वक्तृत्व व शैक्षणिक गुणवत्ता प्राप्त विद्यार्थ्यांचा मंडळाच्या वतीने गौरव.',
      en: 'Felicitation of academic achievers and young winners of drawing and elocution competitions held by the mandal.',
      hi: 'चित्रकला, वक्तृत्व प्रतियोगिता तथा शैक्षणिक सफलता प्राप्त विद्यार्थियों का मंडल द्वारा अभिनंदन।',
    },
    category: 'cultural',
  },
  {
    id: 'event-5',
    dayNumber: 10,
    date: 'अनंत चतुर्दशी',
    title: {
      mr: 'भव्य विसर्जन मिरवणूक सोहळा',
      en: 'Grand Visarjan Immersion Procession',
      hi: 'भव्य विसर्जन शोभायात्रा',
    },
    time: 'दुपारी ३:०० वा. पासून',
    location: {
      mr: 'मंडपापासून विसर्जन तलावापर्यंत',
      en: 'From Mandap to Immersion Lake',
      hi: 'मंडप से विसर्जन तट तक',
    },
    description: {
      mr: 'पुढच्या वर्षी लवकर या या जयघोषात, शांततापूर्ण व शिस्तबद्ध वातावरणात बाप्पांना भावपूर्ण निरोप.',
      en: 'A deeply emotional yet disciplined farewell procession with chants of "Pudhchya Varshi Lavkar Ya".',
      hi: 'अगले बरस तू जल्दी आ के जयकारों के साथ, शांतिपूर्ण एवं अनुशासित वातावरण में बाप्पा को भावभीनी विदाई।',
    },
    highlight: true,
    category: 'visarjan',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: {
      mr: 'श्री बालाजी अवतार गणेश दर्शन',
      en: 'Shree Balaji Avatar Murti Darshan',
      hi: 'श्री बालाजी अवतार गणेश दर्शन',
    },
    caption: {
      mr: 'तिरुपती बालाजींच्या दिव्य अलंकारातील बाप्पांचे विलोभनीय रूप',
      en: 'Divine presence of Lord Ganesha in Lord Venkateshwara Balaji attire',
      hi: 'तिरुपति बालाजी के दिव्य अलंकारों में बाप्पा का अलौकिक स्वरूप',
    },
    category: 'darshan',
    year: 2024,
    imageUrl: '/images/balaji-avatar.svg',
    theme: 'Balaji Avatar',
    isFeatured: true,
  },
  {
    id: 'gal-2',
    title: {
      mr: 'मनोहर मुख्य मूर्ती दर्शन',
      en: 'Main Murti Sanctum View',
      hi: 'मनोहर मुख्य मूर्ति दर्शन',
    },
    caption: {
      mr: 'शांत, तेजस्वी व आशीर्वाद मुद्रेतील श्रींची विलोभनीय मूर्ती',
      en: 'Serene, radiant and blessing posture of Shree Ganpati Murti',
      hi: 'शांत, तेजस्वी एवं आशीर्वाद मुद्रा में श्री गणेश जी की प्रतिमा',
    },
    category: 'darshan',
    year: 2024,
    imageUrl: '/images/murti-main.jpg',
    isFeatured: true,
  },
  {
    id: 'gal-3',
    title: {
      mr: 'उत्साहपूर्ण आगमन सोहळा',
      en: 'Aagaman Sohala Procession',
      hi: 'उत्साहपूर्ण आगमन सोहळा',
    },
    caption: {
      mr: 'युवा कार्यकर्त्यांचा जल्लोष आणि पारंपरिक ढोल-ताशा गजर',
      en: 'Youth volunteers and traditional folk dhol-tasha greeting Bappa',
      hi: 'युवा कार्यकर्ताओं का उत्साह और पारंपरिक ढोल-ताशे की गूंज',
    },
    category: 'aagaman',
    year: 2024,
    imageUrl: '/images/aagaman-sohala.svg',
    isFeatured: true,
  },
  {
    id: 'gal-4',
    title: {
      mr: 'भव्य मंदिर मंडप सजावट',
      en: 'Temple Mandap Artistry & Decor',
      hi: 'भव्य मंदिर मंडप सजावट',
    },
    caption: {
      mr: 'पारंपरिक भारतीय मंदिर वास्तुकलेवर आधारित नक्षीकाम व रोषणाई',
      en: 'Intricate traditional temple architecture and warm golden illumination',
      hi: 'पारंपरिक भारतीय मंदिर वास्तुकला पर आधारित नक्काशी व रोशनी',
    },
    category: 'decoration',
    year: 2024,
    imageUrl: '/images/mandap-decoration.svg',
    isFeatured: false,
  },
  {
    id: 'gal-5',
    title: {
      mr: 'भाविकांची संध्याकाळची उपासना',
      en: 'Evening Devotional Gathering',
      hi: 'सांध्य कालीन उपासना',
    },
    caption: {
      mr: 'हजारो भाविकांच्या उपस्थितीत झालेली मंत्रमुग्ध करणारी प्रार्थना व दर्शन',
      en: 'Hundreds of devotees gathered in deep devotion and reverence',
      hi: 'हजारों श्रद्धालुओं की उपस्थिति में संपन्न भावपूर्ण प्रार्थना एवं दर्शन',
    },
    category: 'darshan',
    year: 2024,
    imageUrl: '/images/maha-aarti.svg',
    isFeatured: true,
  },
  {
    id: 'gal-6',
    title: {
      mr: 'भावपूर्ण विसर्जन मिरवणूक',
      en: 'Reverent Visarjan Immersion',
      hi: 'भावपूर्ण विसर्जन शोभायात्रा',
    },
    caption: {
      mr: 'अश्रू आणि जयघोषांच्या साक्षीने बाप्पांना निरोप देताना भाविक',
      en: 'Devotees bidding a disciplined and emotional farewell to Bappa',
      hi: 'भक्ति और जयकारों के साथ बाप्पा को विदाई देते श्रद्धालु',
    },
    category: 'visarjan',
    year: 2024,
    imageUrl: '/images/visarjan-sohala.svg',
    isFeatured: false,
  },
  {
    id: 'gal-7',
    title: {
      mr: 'स्वच्छता मोहीम व युवा स्वयंसेवक',
      en: 'Cleanliness Drive by Youth Volunteers',
      hi: 'स्वच्छता अभियान एवं युवा स्वयंसेवक',
    },
    caption: {
      mr: 'मंडप परिसराची नियमित स्वच्छता करताना मंडळाचे तरुण कार्यकर्ते',
      en: 'Youth volunteers keeping festival premises spotless every morning',
      hi: 'मंडप क्षेत्र की नियमित स्वच्छता करते मंडल के युवा कार्यकर्ता',
    },
    category: 'social',
    year: 2024,
    imageUrl: '/images/cleanliness-drive.svg',
    isFeatured: false,
  },
  {
    id: 'gal-8',
    title: {
      mr: 'भाविक भक्तांसाठी महाप्रसाद वाटप',
      en: 'Mahaprasad & Food Distribution',
      hi: 'श्रद्धालुओं के लिए महाप्रसाद वितरण',
    },
    caption: {
      mr: 'उत्सवाच्या ५ व्या दिवशी हजारो भक्तांना सात्विक प्रसादाचे वाटप',
      en: 'Wholesome prasad lovingly distributed to all pilgrims and visitors',
      hi: 'उत्सव के ५वें दिन सभी दर्शनार्थियों को सात्विक प्रसाद वितरण',
    },
    category: 'social',
    year: 2023,
    imageUrl: '/images/annadan-prasad.svg',
    isFeatured: false,
  },
  {
    id: 'gal-9',
    title: {
      mr: 'पर्यावरणपूरक गणेशोत्सव जनजागृती',
      en: 'Eco-Friendly Festival Awareness',
      hi: 'पर्यावरण अनुकूल गणेशोत्सव जनजागरूकता',
    },
    caption: {
      mr: 'शाडू माती मूर्ती आणि निर्माल्य खत निर्मिती जनजागृती उपक्रम',
      en: 'Promoting clay idols and separate nirmalya collection for composting',
      hi: 'माटी की प्रतिमा एवं निर्माल्य खाद निर्माण जनजागरूकता पहल',
    },
    category: 'social',
    year: 2023,
    imageUrl: '/images/eco-ganeshotsav.svg',
    isFeatured: false,
  },
];

export const SOCIAL_INITIATIVES: SocialInitiative[] = [
  {
    id: 'soc-1',
    title: {
      mr: 'स्वच्छ परिसर व निर्माल्य व्यवस्थापन',
      en: 'Pandal Cleanliness & Nirmalya Management',
      hi: 'स्वच्छ परिसर एवं निर्माल्य प्रबंधन',
    },
    summary: {
      mr: 'उत्सवाच्या १० दिवसांत मंडप आणि आजूबाजूच्या गल्ल्यांची दररोज नियमित स्वच्छता.',
      en: 'Daily volunteer-led cleanliness and segregated floral waste collection.',
      hi: 'उत्सव के १० दिनों में मंडप व आसपास की गलियों की प्रतिदिन नियमित स्वच्छता।',
    },
    fullDescription: {
      mr: 'श्री साई आशिष मित्र मंडळाचे तरुण स्वयंसेवक उत्सवादरम्यान परिसराच्या स्वच्छतेची विशेष काळजी घेतात. निर्माल्यासाठी स्वतंत्र कलश ठेवण्यात येतात, जेणेकरून फुलांचा योग्य विल्हेवाट लावून कंपोस्ट खत तयार करता येते.',
      en: 'Mandal youth volunteers take pride in keeping the surroundings hygienic throughout the festival. Nirmalya is collected separately in designated kalash units to ensure respectful and organic composting.',
      hi: 'श्री साई आशीष मित्र मंडल के युवा स्वयंसेवक उत्सव के दौरान परिसर की स्वच्छता का विशेष ध्यान रखते हैं। निर्माल्य के लिए अलग कलश रखे जाते हैं ताकि पवित्र पुष्पों से जैविक खाद बनाई जा सके।',
    },
    category: 'cleanliness',
    year: 2024,
    imageUrl: '/images/cleanliness-drive.svg',
    metrics: {
      mr: '१० दिवस अविरत स्वच्छता सेवा',
      en: '10 days continuous hygiene drive',
      hi: '१० दिन निरंतर स्वच्छता सेवा',
    },
  },
  {
    id: 'soc-2',
    title: {
      mr: 'भाविक भक्तांना महाप्रसाद व अन्नदान',
      en: 'Devotee Mahaprasad & Nourishment',
      hi: 'श्रद्धालुओं के लिए महाप्रसाद व अन्नदान',
    },
    summary: {
      mr: 'उत्सवादरम्यान सत्यनारायण पूजेनिमित्त हजारो भक्तांना प्रेमाने सात्विक भोजन वाटप.',
      en: 'Serving nutritious prasad and fresh drinking water to every visiting devotee.',
      hi: 'सत्यनारायण पूजा के पावन अवसर पर सहस्रों भक्तों को प्रेमपूर्वक महाप्रसाद वितरण।',
    },
    fullDescription: {
      mr: 'कोणताही भाविक दर्शनावरून रिकाम्या पोटी जाऊ नये या हेतूने मंडळाकडून दरवर्षी शुद्ध, सात्विक व स्वच्छतेच्या उच्च मानकांचे पालन करून महाप्रसाद बनवून वाटप करण्यात येतो.',
      en: 'Driven by the core value of Atithi Devo Bhava, youth members prepare and distribute freshly cooked satvik meals to queued devotees and local families.',
      hi: 'कोई भी श्रद्धालु दर्शन के उपरांत भूखा न लौटे, इसी भावना के साथ मंडल द्वारा शुद्ध, सात्विक एवं स्वच्छ महाप्रसाद तैयार कर वितरित किया जाता है।',
    },
    category: 'food',
    year: 2024,
    imageUrl: '/images/annadan-prasad.svg',
    metrics: {
      mr: '२,५००+ भाविकांना दरवर्षी प्रसाद',
      en: '2,500+ devotees served annually',
      hi: '२,५००+ श्रद्धालुओं को वार्षिक प्रसाद',
    },
  },
  {
    id: 'soc-3',
    title: {
      mr: 'पर्यावरणपूरक उत्सव जनजागृती मोहीम',
      en: 'Eco-Friendly Ganeshotsav Awareness',
      hi: 'पर्यावरण अनुकूल गणेशोत्सव जनजागरण',
    },
    summary: {
      mr: 'प्लॅस्टिक बंदी, ध्वनी प्रदूषणाचे नियंत्रण आणि शाडू माती मूर्ती वापराचे आवाहन.',
      en: 'Advocating noise-level control, zero plastic usage, and traditional clay idols.',
      hi: 'प्लास्टिक निषेध, ध्वनि प्रदूषण नियंत्रण एवं मिट्टी की मूर्तियों के प्रयोग का आग्रह।',
    },
    fullDescription: {
      mr: 'पर्यावरणाचे रक्षण हेच ईश्वराचे खरे पूजन आहे या विचारधारेवर मंडळाचा ठाम विश्वास आहे. मंडपात प्लास्टिकचा वापर टाळला जातो आणि मिरवणुकीत मर्यादित आवाजाची शिस्त पाळली जाते.',
      en: 'The mandal strongly champions nature-friendly festivities. Pandal banners are reusable, single-use plastic is prohibited, and procession decibels are monitored responsibly.',
      hi: 'प्रकृति का संरक्षण ही ईश्वर की सच्ची पूजा है, इस सिद्धांत पर मंडल दृढ़ है। मंडप में प्लास्टिक का प्रयोग वर्जित रहता है तथा विसर्जन में ध्वनि अनुशासन रखा जाता है।',
    },
    category: 'environment',
    year: 2023,
    imageUrl: '/images/eco-ganeshotsav.svg',
    metrics: {
      mr: '१००% प्लास्टिकमुक्त मंडप परिसर',
      en: '100% plastic-free pandal zone',
      hi: '१००% प्लास्टिक मुक्त मंडप क्षेत्र',
    },
  },
  {
    id: 'soc-4',
    title: {
      mr: 'युवा नेतृत्व व आपत्कालीन स्वयंसेवक दल',
      en: 'Youth Leadership & Crowdsafety Team',
      hi: 'युवा नेतृत्व एवं आपदा स्वयंसेवक दल',
    },
    summary: {
      mr: 'स्थानिक तरुणांना एकत्र आणून शिस्तबद्ध उत्सव नियोजन आणि भाविकांचे सुरळीत दर्शन.',
      en: 'Channeling youth enthusiasm into respectful crowd management and civic duty.',
      hi: 'स्थानीय युवाओं को जोड़कर अनुशासित उत्सव प्रबंधन और सुगम दर्शन व्यवस्था।',
    },
    fullDescription: {
      mr: '२०१५ मध्ये स्थापन झालेल्या या मंडळाची मूळ ताकद म्हणजे स्थानिक तरुण वर्ग. उत्सवादरम्यान वाहतूक नियंत्रण, गर्दी व्यवस्थापन आणि प्रथमोपचाराची जबाबदारी हे युवा स्वयंसेवक चोख पार पाडतात.',
      en: 'Since its 2015 establishment, the backbone of Shree Sai Ashish Mitra Mandal has been its energetic youth volunteers. They coordinate crowd queues, ensure safe transit, and maintain round-the-clock festival vigil.',
      hi: '२०१५ से स्थापित इस मंडल की सबसे बड़ी शक्ति स्थानीय युवा हैं। उत्सव के दौरान कतार व्यवस्था, यातायात नियंत्रण एवं प्राथमिक चिकित्सा में युवा दल तत्पर रहता है।',
    },
    category: 'youth',
    year: 2024,
    imageUrl: '/images/cleanliness-drive.svg',
    metrics: {
      mr: '५०+ समर्पित युवा स्वयंसेवक',
      en: '50+ dedicated youth volunteers',
      hi: '५०+ समर्पित युवा स्वयंसेवक',
    },
  },
];
