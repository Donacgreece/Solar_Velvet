# Solar Velvet

Official website for **Solar Velvet**, a chill disco music project inspired by golden hour, coastal drives, Riviera nights and dancefloor nostalgia.

## Live music

- [Solar Velvet on YouTube](https://www.youtube.com/@solarvelvetmusic)
- [Riviera Nights](https://youtu.be/d-JhjZPDxJM)

## Releases

| Episode | Release | Status |
| --- | --- | --- |
| 001 | Riviera Nights | Available |
| 002 | Vinyl Nights | Available |

## Website features

- Responsive cinematic landing page
- Featured YouTube release
- Solar Velvet artist section
- Album and session archive
- Search engine metadata and structured data
- XML sitemap and crawler configuration
- Social sharing metadata
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
