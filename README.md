# श्री साई आशिष मित्र मंडळ (Shree Sai Ashish Mitra Mandal) - Official Website

The official, responsive, devotional website for **Shree Sai Ashish Mitra Mandal**, Sarvajanik Ganeshotsav, Bhayandar (East), Thane (Estd. 2015). Inspired by the simplicity, devotional focus, and clean structure of reference festival portals like Lalbaugcha Raja, while maintaining its own authentic youth-led identity.

---

## 🌟 Key Features

1. **Devotional & Authentic Design System**:
   - Deep temple maroon (`#701722`), muted temple gold (`#C79B48`), warm ivory background (`#FFFAF2`), and dark charcoal typography (`#241C1B`).
   - Clean, centered, minimal layouts with traditional motifs and zero bloated commercial agency widgets.
   - Devanagari typography with `Noto Sans Devanagari` and modern typography with `Montserrat`.

2. **Multilingual Support (मराठी | English | हिन्दी)**:
   - Default language: **मराठी (Marathi)**.
   - Live language selector on desktop header and mobile drawer.
   - Complete dictionary translations across all pages, navigation, daily aartis, announcements, and footer.
   - Remembers user's language choice in `localStorage`.

3. **Festival Pages**:
   - **मुख्यपृष्ठ (Home)**: High-resolution murti showcase, Marathi blessings (*गणपती बाप्पा मोरया!*), Aarti ticker, Balaji Avatar theme highlight, darshan photo preview, youth empowerment story, and Instagram connect.
   - **आमच्याबद्दल (About Us)**: Mandal inception (2015), youth volunteer foundation, guiding pillars (श्रद्धा, शिस्त, समाज प्रबोधन), and Ganeshotsav traditions.
   - **दर्शन (Darshan)**: Main Ganpati murti darshan, Shree Balaji Avatar theme presentation, daily aarti timings, queue guidelines, and prasad information.
   - **छायाचित्रे (Photo Gallery)**: Categorized by Ganpati Darshan, Aagaman, Mandap Decoration, Aarti, Visarjan, and Social Work. Features a responsive full-screen lightbox modal with keyboard navigation.
   - **उत्सव व कार्यक्रम (Utsav & Events)**: 10-day festival timeline (Aagaman to Visarjan), daily morning/evening aarti schedules, and festival archives.
   - **सामाजिक कार्य (Social Work)**: Real youth initiatives: Swachhata Abhiyan, Nirmalya segregation, Mahaprasad distribution, and eco-friendly festival awareness.
   - **संपर्क (Contact)**: Verified address (Bhayandar East, Thane), interactive Google Maps embed, WhatsApp chat link, official Instagram connect, and devotional prayer/inquiry form.

4. **Ready for Your Official Logo & Real Photos**:
   - Built with smart fallbacks: drop your official logo at `public/images/logo.png` and it will automatically replace the default sacred emblem across the site!
   - Replace festival artwork with real photos at `public/images/murti-main.jpg`, `balaji-avatar.jpg`, etc.
   - See [`public/ASSETS_GUIDE.md`](file:///public/ASSETS_GUIDE.md) for full instructions.

5. **SEO & Performance**:
   - Open Graph and Twitter Card metadata for rich social sharing.
   - Structured JSON-LD schema (`HinduTemple` / religious festival organization).
   - Dynamic `sitemap.xml` and `robots.txt`.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide Icons & Custom SVG Social Icons
- **Fonts**: `next/font/google` (Noto Sans Devanagari & Montserrat)
- **Deployment**: Vercel-ready

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
ssamm/
├── public/
│   ├── images/                # Festival artwork & murti photos
│   │   ├── murti-main.svg     # Main Ganpati murti darshan
│   │   ├── balaji-avatar.svg  # Shree Balaji Avatar theme
│   │   ├── aagaman-sohala.svg # Aagaman procession
│   │   ├── mandap-decoration.svg
│   │   ├── maha-aarti.svg
│   │   ├── visarjan-sohala.svg
│   │   ├── cleanliness-drive.svg
│   │   ├── annadan-prasad.svg
│   │   └── eco-ganeshotsav.svg
│   └── ASSETS_GUIDE.md        # Step-by-step image replacement guide
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with fonts, metadata, header, footer
│   │   ├── globals.css        # Tailwind v4 theme colors & devotional styling
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx     # About Us page
│   │   ├── darshan/page.tsx   # Darshan page & Balaji theme
│   │   ├── gallery/page.tsx   # Photo Gallery with filter tabs & modal
│   │   ├── utsav/page.tsx     # Festival events & aarti schedule
│   │   ├── social-work/page.tsx # Community & youth initiatives
│   │   ├── contact/page.tsx   # Mandap location, Google Maps, contact form
│   │   ├── sitemap.ts         # Dynamic SEO sitemap
│   │   └── robots.ts          # Search engine crawlers config
│   ├── components/
│   │   ├── Header.tsx         # Compact navigation with emblem & mobile drawer
│   │   ├── Footer.tsx         # Traditional footer with greetings & Instagram
│   │   ├── Emblem.tsx         # Sacred logo with auto-fallback to logo.png
│   │   ├── LanguageSwitcher.tsx # Marathi, English, Hindi toggle
│   │   ├── AnnouncementBanner.tsx # Top notification ticker
│   │   ├── DevotionalDivider.tsx  # Traditional lotus motif separator
│   │   ├── PhotoModal.tsx     # Lightbox photo viewer
│   │   └── SocialIcons.tsx    # Clean SVG icons for Instagram, WhatsApp
│   ├── content/
│   │   ├── mandalData.ts      # Structured data (Aarti, Events, Announcements, Info)
│   │   └── translations.ts   # Multilingual Marathi, English, Hindi dictionaries
│   ├── context/
│   │   └── LanguageContext.tsx# Reactive language state & provider
│   └── types/
│       └── index.ts           # TypeScript interfaces
```

---

## 🎨 How to Customize Content & Upload Logo

### Upload Mandal Logo
Place your logo image at:
```
public/images/logo.png
```
*(PNG with transparent background is recommended)*. The website will automatically display it.

### Edit Mandal Details & Schedule
Open:
```
src/content/mandalData.ts
```
Here you can update:
- Street address & Google Maps link (`MANDAL_INFO.location`)
- WhatsApp number (`MANDAL_INFO.social.whatsappInquiry`)
- Official Instagram link (`MANDAL_INFO.social.instagram`)
- Daily Aarti timings (`AARTI_SCHEDULE`)
- Upcoming Festival Events (`FESTIVAL_EVENTS`)
- Announcements (`ANNOUNCEMENTS`)

All updates instantly reflect across Marathi, English, and Hindi versions!

---

## 🚢 Deployment to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel automatically detects Next.js.
4. Click **"Deploy"**. The site will be live on your custom `.vercel.app` domain within minutes!
