import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://solarvelvet.com';
const publicPath = '';
const title = 'Solar Velvet | Music for Cafés, Bars & Relaxing Nights';
const description = 'Discover Solar Velvet music for café ambience, cocktail bars and relaxing evenings. Stream chill disco, nu disco, late night R&B and dreamy soul on YouTube.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: 'Solar Velvet',
  authors: [{ name: 'Solar Velvet', url: siteUrl }],
  creator: 'Solar Velvet',
  publisher: 'Solar Velvet',
  category: 'Music',
  keywords: [
    'Solar Velvet',
    'Golden Hours',
    'Midnight Rooms',
    'chill disco',
    'late night R&B',
    'chill R&B',
    'dreamy soul',
    'sunset funk',
    'female airy vocals',
    'soft male tenor',
    'Riviera Nights',
    'Vinyl Nights',
    'Stay Until Morning',
    'Somewhere Past Midnight',
    'Palm Radio',
    'sunset music',
    'disco mix',
    'chill music',
    'nu disco',
    'coastal music',
    'golden hour playlist',
    'music for cafe',
    'music for cafe bar',
    'cocktail bar music',
    'lounge music for bars',
    'relaxing evening music',
    'music to relax at night',
    'background music for cafe ambience',
    'free music to listen on YouTube',
  ],
  alternates: { canonical: '/' },
  icons: { icon: `${publicPath}/favicon.svg`, shortcut: `${publicPath}/favicon.svg`, apple: `${publicPath}/favicon.svg` },
  manifest: `${publicPath}/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Solar Velvet',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: '/solar-velvet-share.png',
      width: 1672,
      height: 940,
      alt: 'Solar Velvet sunset over the Riviera',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/solar-velvet-share.png'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'Solar Velvet',
      description,
      inLanguage: 'en',
      publisher: { '@id': `${siteUrl}/#artist` },
    },
    {
      '@type': ['Organization', 'MusicGroup'],
      '@id': `${siteUrl}/#artist`,
      name: 'Solar Velvet',
      url: `${siteUrl}/`,
      email: 'info@solarvelvet.com',
      description: 'A two-voice music project connecting Golden Hours chill disco with Midnight Rooms late night R&B, dreamy soul and cinematic coastal sound.',
      genre: ['Chill disco', 'Nu disco', 'Sunset funk', 'Chill R&B', 'Late night soul'],
      image: `${siteUrl}/solar-velvet-duo-sunset.png`,
      logo: `${siteUrl}/favicon.svg`,
      sameAs: ['https://www.youtube.com/@solarvelvetmusic'],
      album: [
        { '@type': 'MusicAlbum', name: 'Riviera Nights', albumProductionType: 'StudioAlbum', byArtist: { '@id': `${siteUrl}/#artist` }, image: `${siteUrl}/album-riviera-nights-cd.png`, url: 'https://youtu.be/d-JhjZPDxJM' },
        { '@type': 'MusicAlbum', name: 'Vinyl Nights', albumProductionType: 'StudioAlbum', byArtist: { '@id': `${siteUrl}/#artist` }, image: `${siteUrl}/album-vinyl-nights-cd.png`, url: 'https://youtu.be/gNwOitM9X2U' },
        { '@type': 'MusicAlbum', name: 'Stay Until Morning', albumProductionType: 'StudioAlbum', byArtist: { '@id': `${siteUrl}/#artist` }, image: `${siteUrl}/album-stay-until-morning-cd.png`, url: 'https://youtu.be/iwtNlugTIic' },
        { '@type': 'MusicAlbum', name: 'Somewhere Past Midnight', albumProductionType: 'StudioAlbum', byArtist: { '@id': `${siteUrl}/#artist` }, image: `${siteUrl}/album-somewhere-past-midnight-cd.png`, url: 'https://www.youtube.com/watch?v=gyixC-QE_c8' },
        { '@type': 'MusicAlbum', name: 'Palm Radio', albumProductionType: 'StudioAlbum', byArtist: { '@id': `${siteUrl}/#artist` }, image: `${siteUrl}/album-palm-radio-cd.png` },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#listening-guide`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I find music for a café or bar?',
          acceptedAnswer: { '@type': 'Answer', text: 'Solar Velvet offers chill disco, nu disco, smooth R&B and late night soul for elegant spaces and relaxed evenings. Every available release links to the official Solar Velvet YouTube channel.' },
        },
        {
          '@type': 'Question',
          name: 'What Solar Velvet music is best for relaxing at night?',
          acceptedAnswer: { '@type': 'Answer', text: 'Golden Hours suits sunset listening, café ambience and coastal evenings. Midnight Rooms suits low light, relaxing nights, dreamy soul and intimate late night R&B.' },
        },
        {
          '@type': 'Question',
          name: 'Can businesses play Solar Velvet through YouTube?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Cafés, bars, lounges and other spaces can open the official Solar Velvet YouTube channel and play the available mixes directly through YouTube.' },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8D0P74XL3L" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-8D0P74XL3L');`,
          }}
        />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
