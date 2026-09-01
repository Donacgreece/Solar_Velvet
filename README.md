# Solar Velvet

Official website for **Solar Velvet**, a two-voice music project connecting Golden Hours chill disco with Midnight Rooms late night R&B.

## Live music

- [Solar Velvet on YouTube](https://www.youtube.com/@solarvelvetmusic)
- [Riviera Nights](https://youtu.be/d-JhjZPDxJM)
- [Vinyl Nights](https://youtu.be/gNwOitM9X2U)
- [Stay Until Morning](https://youtu.be/iwtNlugTIic)

## Releases

| Episode | Release | Status |
| --- | --- | --- |
| 001 | Riviera Nights | Available |
| 002 | Vinyl Nights | Available |
| 003 | Stay Until Morning | Available |
| 004 | Palm Radio | Coming soon |

## Website features

- Responsive cinematic landing page
- Golden Hours and Midnight Rooms collections
- Female Chill Disco and male Late Night R&B identities
- Album and YouTube session archive
- Search engine metadata and structured data
- XML sitemap and crawler configuration
- Social sharing metadata
- Google Search Console verification
- Machine-readable discovery summary in `llms.txt`
- Mobile and desktop layouts

## Technology

- React
- TypeScript
- Vinext
- Vite
- Tailwind CSS

## Local development

Requirements:

- Node.js 22.13 or newer
- npm

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

Create a production build:

```powershell
npm run build
```

## Adding a release

Release information is stored in the `releases` list inside `app/page.tsx`.

For each release, add:

- title
- episode number
- year
- short description
- thumbnail or album artwork
- YouTube URL

Place new artwork files in the `public` directory and reference them with a root-relative path.

## Official domain

The website is prepared for:

[`https://solarvelvet.com`](https://solarvelvet.com)

## Copyright

Copyright 2026 Solar Velvet. All rights reserved.
