# Swananda — Website

Craft mocktail premix powders for Hotels, Restaurants & Cafés.

---

## Folder Structure

```
swananda-site/
├── index.html              ← page shell, do not edit
├── content/
│   └── site.js             ← ALL content lives here
├── assets/
│   ├── css/
│   │   ├── theme.css       ← colours & fonts
│   │   ├── layout.css      ← grids & spacing
│   │   ├── components.css  ← UI components
│   │   └── animations.css  ← transitions
│   ├── js/
│   │   ├── render.js       ← builds page from site.js
│   │   ├── carousel.js     ← hero slider
│   │   ├── offerings.js    ← tab switching
│   │   └── form.js         ← inquiry form
│   └── images/
│       ├── drinks/         ← mocktail photos
│       ├── sachets/        ← powder sachet photos
│       └── events/         ← journey / milestone photos
└── README.md
```

---

## How to Update Content

**Edit any text, name, or stat:**
```
open content/site.js → change the value → save → git push
```

**Add a new flavour:**
1. Drop drink photo into `assets/images/drinks/`
2. Drop sachet photo into `assets/images/sachets/`
3. Add a new object to the `flavours` array in `content/site.js`
4. `git push`

**Update a photo:**
```
replace the file in assets/images/ with the same filename → git push
```

**Change brand colour:**
```
open assets/css/theme.css → update --color-amber → git push
```

**Add a journey milestone:**
1. Drop photo into `assets/images/events/`
2. Add object to `journey.milestones` in `content/site.js`
3. `git push`

---

## Local Development

```bash
# Install a simple dev server (once)
npm install -g serve

# Run from project root
serve .

# Open http://localhost:3000
```

> Note: Do not open `index.html` directly in a browser —
> it needs a local server to load `content/site.js` correctly.

---

## Deploying to Netlify

1. Push this folder to a GitHub repository
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from GitHub
3. Select your repo
4. Build command: *(leave empty)*
5. Publish directory: `.` *(or leave empty)*
6. Click **Deploy**

Every `git push` after this auto-deploys the site in ~30 seconds.

### Custom Domain
Settings → Domain management → Add custom domain

### Enable Form Submissions (Netlify Forms)
In `assets/js/form.js`, uncomment the Netlify fetch block.
In `render.js`, add `data-netlify="true"` and `name="inquiry"` to the form element.

---

## Image Guidelines

| Folder     | Recommended size | Format |
|------------|-----------------|--------|
| drinks/    | 600×900px        | JPG    |
| sachets/   | 533×800px        | JPG    |
| events/    | 700×467px        | JPG    |

Compress images before uploading — target under 150 KB each.
Use [Squoosh](https://squoosh.app) for free compression.

---

## Tech Stack

- Plain HTML / CSS / JavaScript — no framework, no build step
- Google Fonts (Cormorant Garamond + DM Sans)
- Hosted on Netlify (free tier)
