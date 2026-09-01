import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://solarvelvet.com';
const publicPath = '';
const title = 'Solar Velvet | Chill Disco & Late Night R&B';
const description = 'Solar Velvet is a two-voice music world. Golden Hours brings chill disco and airy female vocals. Midnight Rooms blends late night R&B with a soft male tenor.';

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
    'Palm Radio',
    'sunset music',
    'disco mix',
    'chill music',
    'nu disco',
    'coastal music',
    'golden hour playlist',
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
      url: '/og.png',
      width: 1672,
      height: 940,
      alt: 'Solar Velvet sunset over the Riviera',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
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
        { '@type': 'MusicAlbum', name: 'Palm Radio', albumProductionType: 'StudioAlbum', byArtist: { '@id': `${siteUrl}/#artist` }, image: `${siteUrl}/album-palm-radio-cd.png` },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
