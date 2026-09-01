import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://solarvelvet.com';
const publicPath = '';
const title = 'Solar Velvet | Chill Disco Music and Sunset Mixes';
const description = 'Solar Velvet creates cinematic chill disco mixes inspired by golden hour, coastal drives, Riviera nights and dancefloor nostalgia. Listen to Riviera Nights and discover every Solar Velvet session.';

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
    'chill disco',
    'Riviera Nights',
    'Vinyl Nights',
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
      '@type': 'MusicGroup',
      '@id': `${siteUrl}/#artist`,
      name: 'Solar Velvet',
      url: `${siteUrl}/`,
      description: 'A chill disco music project creating cinematic mixes inspired by golden hour, coastal drives and Riviera nights.',
      genre: ['Chill disco', 'Nu disco'],
      image: `${siteUrl}/solar-velvet-duo-sunset.png`,
      logo: `${siteUrl}/favicon.svg`,
      sameAs: ['https://www.youtube.com/@solarvelvetmusic'],
      album: [
        { '@type': 'MusicAlbum', name: 'Riviera Nights', image: `${siteUrl}/album-riviera-nights-cd.png`, url: 'https://youtu.be/d-JhjZPDxJM' },
        { '@type': 'MusicAlbum', name: 'Vinyl Nights', image: `${siteUrl}/album-vinyl-nights-cd.png` },
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
