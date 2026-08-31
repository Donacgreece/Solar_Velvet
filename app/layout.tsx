import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Solar Velvet — Chill Disco', description: 'Slow grooves, warm nights and cinematic chill disco escapes from Solar Velvet.', icons: { icon: '/favicon.svg', shortcut: '/favicon.svg', apple: '/favicon.svg' }, openGraph: { title: 'Solar Velvet — Chill Disco', description: 'Stay for the golden hour. Chill disco from somewhere near the sea.', images: ['/solar-velvet-cover.png'] }, twitter: { card: 'summary_large_image', title: 'Solar Velvet — Chill Disco', description: 'Stay for the golden hour.', images: ['/solar-velvet-cover.png'] } };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
