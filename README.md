# Zaragoza Home — zaragozahome.org

A bilingual (English / Spanish) fundraising site for **Hogar de Ancianos Zaragoza**, a nursing home in Zaragoza, El Salvador, where more than 50 elderly residents have been without running water for months due to an inexplicable $15,000+ water bill caused by an underground leak.

## Stack

Pure static site — HTML, CSS, vanilla JavaScript. No build step, no framework, no server. Designed to be hosted on **GitHub Pages** behind a custom domain with HTTPS.

## Structure

```
/
├── index.html                 # Single-page site
├── CNAME                      # Custom domain for GitHub Pages
├── css/style.css              # All styles
├── js/main.js                 # i18n, modal, share, header scroll
├── locales/
│   ├── en.json                # English copy (editorial reference)
│   └── es.json                # Spanish copy (editorial reference)
└── img/
    ├── source/                # Original uploads (kept for re-export)
    └── optimized/             # webp at 1600w and 800w for srcset
```

The locale data is **inlined** in `js/main.js` so the site works on `file://` (no fetch / CORS). The `locales/*.json` files mirror that data for translator workflow — if you edit them, also update the matching object in `js/main.js`.

## Editing copy

Open `js/main.js`, find the `LOCALES` object, edit the strings in `LOCALES.en` and `LOCALES.es`. Each string is referenced from HTML by a `data-i18n="section.key"` attribute.

## Updating photos

1. Drop new JPEGs into `img/source/`.
2. Convert to webp at two sizes (1600w and 800w) — use ImageMagick:
   ```bash
   convert source.jpg -auto-orient -resize 1600x1600\> -strip -quality 82 optimized/name-1600.webp
   convert source.jpg -auto-orient -resize 800x800\>   -strip -quality 80 optimized/name-800.webp
   ```
3. Reference in `index.html` using the existing `<picture><source>` pattern.

## Deploy

Push to the `main` branch of the GitHub repo, enable **Settings → Pages** with branch `main` and folder `/ (root)`, then add the custom domain `zaragozahome.org` and tick **Enforce HTTPS** once the certificate provisions.

## Open items

- [ ] Confirm exact number of residents (currently "50+")
- [ ] Confirm exact months without water (currently "TBD")
- [ ] Wire real donation links (GoFundMe / PayPal / bank transfer)
- [ ] Replace WhatsApp photos with professional camera photos
- [ ] Add Instagram / Facebook URLs in the footer
