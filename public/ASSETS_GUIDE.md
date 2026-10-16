# Shree Sai Ashish Mitra Mandal - Assets & Customization Guide

This project is built to make it exceptionally easy for the Mandal organizers to update their official logo, genuine festival photos, contact numbers, and festival schedules.

---

## 1. How to Upload Your Mandal Logo
To upload or change the official mandal logo:
1. Prepare your logo file in `.png`, `.jpg`, or `.svg` format (preferably square or circular with transparent or clean background).
2. Save it to:
   ```
   public/images/logo.png
   ```
3. That's it! The website's `<Emblem />` component will automatically display your logo across the desktop header, mobile menu, and footer.
   *(If `logo.png` is absent or while you prepare it, the website renders the built-in sacred Ganesha crest).*

---

## 2. How to Upload Real Festival & Murti Photos
You can replace the default festival artwork with actual high-resolution photographs from the official Instagram (`@saiashishmitramandal`) or your camera by placing files with these names in `public/images/`:

| File Name | Purpose / Section | Current Fallback |
| :--- | :--- | :--- |
| `public/images/murti-main.jpg` | Main Ganpati Murti (Home & Darshan Hero) | `murti-main.svg` |
| `public/images/balaji-avatar.jpg` | Balaji Avatar Theme Murti | `balaji-avatar.svg` |
| `public/images/aagaman-sohala.jpg` | Aagaman Sohala Procession & Dhol Tasha | `aagaman-sohala.svg` |
| `public/images/mandap-decoration.jpg`| Mandap Architecture & Lighting | `mandap-decoration.svg` |
| `public/images/maha-aarti.jpg` | Evening Maha Aarti & Camphor Deepak | `maha-aarti.svg` |
| `public/images/visarjan-sohala.jpg` | Visarjan Farewell Procession | `visarjan-sohala.svg` |
| `public/images/cleanliness-drive.jpg` | Swachhata Abhiyan by Youth Volunteers | `cleanliness-drive.svg` |
| `public/images/annadan-prasad.jpg` | Mahaprasad & Food Distribution | `annadan-prasad.svg` |
| `public/images/eco-ganeshotsav.jpg` | Eco-Friendly Clay Idol & Tree Planting | `eco-ganeshotsav.svg` |

> **Tip**: You can also add more photos by simply editing `src/content/mandalData.ts` and adding new items to the `GALLERY_ITEMS` array with your custom image path!

---

## 3. How to Update Festival Dates, Aarti Timings & Contact Info
All mandal information is cleanly separated from code inside:
```
src/content/mandalData.ts
```

Open `src/content/mandalData.ts` to change:
- **Exact Address & Google Maps link** in `MANDAL_INFO.location`
- **Phone / WhatsApp number** in `MANDAL_INFO.social.whatsappInquiry`
- **Daily Aarti Timings** in `AARTI_SCHEDULE`
- **Upcoming Festival Events** in `FESTIVAL_EVENTS`
- **Announcements Ticker** in `ANNOUNCEMENTS`
- **Theme details** (e.g., Balaji Avatar theme) in `MANDAL_INFO.themeHighlight`

All changes will immediately reflect across Marathi, English, and Hindi pages!
