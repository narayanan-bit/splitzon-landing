# Splitzon Landing Page — HTML/CSS/JS

Pure HTML + CSS + JavaScript version of the Splitzon home/landing page
(no Flutter, no framework — plain static site).

## Folder structure

```
splitzon-landing/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/        ← COPY YOUR IMAGES HERE (see below)
└── README.md
```

## 1. Copy your images

Copy these exact files from your Flutter project's
`assets/images/` folder into this project's `assets/images/` folder:

- `logo.png`
- `laptop_mockup.png`
- `phone_mockup.png`
- `app_store.png`
- `play_store_badge.png`

The filenames must match exactly (case-sensitive) — the HTML already
references these names.

## 2. Login / Sign up links

Both "Login" and "Sign up" buttons (top nav + bottom CTA) currently
point to:

```
https://szfe.atom8itsolutions.com/login
```

Update this in `index.html` (search for `szfe.atom8itsolutions.com`)
once your frontend server path is finalized.

## 3. Run locally

No build step needed — it's a static site. Just open `index.html`
in a browser, or serve it with any static server, e.g.:

```bash
npx serve .
```

or

```bash
python3 -m http.server 5005
```

## 4. Deploy

Upload the whole `splitzon-landing/` folder to your web server /
hosting (Nginx, Apache, Netlify, Vercel, S3, etc.) — no build step
required since it's plain HTML/CSS/JS.

## Notes

- Nav links (How It Works / Features / For You / FAQs) scroll to
  the matching section on the same page.
- Below 900px width, nav links + login/signup buttons and the hero
  mockup/floating cards are hidden (same behavior as the Flutter version).
- Colors, fonts (Poppins + Inter via Google Fonts), and layout mirror
  the original Flutter design 1:1.
