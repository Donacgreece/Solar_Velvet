import { ArrowDown, ArrowUpRight, Headphones, Play, Radio } from 'lucide-react';

export const dynamic = 'force-static';

const assetBase = '';
const asset = (path: string) => `${assetBase}${path}`;

const goldenHours = [
  { title: 'Riviera Nights', number: '001', year: '2026', albumImage: asset('/album-riviera-nights-cd.png'), youtube: 'https://youtu.be/d-JhjZPDxJM?si=7LMkOFFHgJgczrTN' },
  { title: 'Vinyl Nights', number: '002', year: '2026', albumImage: asset('/album-vinyl-nights-cd.png'), youtube: 'https://youtu.be/gNwOitM9X2U?si=TIYM9G4OVEvTTGHF' },
  { title: 'Palm Radio', number: '004', year: '2026', albumImage: asset('/album-palm-radio-cd.png') },
];

const midnightRooms = [
  { title: 'Stay Until Morning', number: '003', year: '2026', albumImage: asset('/album-stay-until-morning-cd.png'), youtube: 'https://youtu.be/iwtNlugTIic' },
];

type Release = (typeof goldenHours)[number];

function AlbumCard({ release }: { release: Release }) {
  const artwork = <div className="album-art"><img className={`album-disc album-disc-${release.number}`} src={release.albumImage} alt={`${release.title} CD artwork`}/>{release.youtube ? <span><Play size={22} fill="currentColor"/></span> : <i>COMING SOON</i>}</div>;
  const details = <p><b>{release.title}</b><small>{release.year} · EPISODE {release.number}</small></p>;
  return release.youtube
    ? <a className="album album-live" href={release.youtube} target="_blank" rel="noreferrer">{artwork}{details}</a>
    : <article className="album album-upcoming">{artwork}{details}</article>;
}

export default function Home() {
  return <main>
    <header className="site-nav">
      <a className="wordmark" href="#top" aria-label="Solar Velvet home"><span className="sun-mark"><i/><i/><i/></span><span>SOLAR <b>VELVET</b></span></a>
      <nav aria-label="Main navigation"><a href="#golden-hours">Golden Hours</a><a href="#midnight-rooms">Midnight Rooms</a><a href="#story">Two souls</a></nav>
      <a className="nav-cta" href="https://www.youtube.com/@solarvelvetmusic" target="_blank" rel="noreferrer">YouTube <ArrowUpRight size={14}/></a>
    </header>

    <section className="hero" id="top">
      <img className="hero-bg" src={asset('/solar-velvet-cover.png')} alt="Sunset over the Riviera"/><div className="hero-shade"/>
      <div className="hero-copy"><p className="eyebrow">TWO SOULS · TWO FREQUENCIES</p><h1>Music for every<br/><em>shade of night.</em></h1><p className="hero-intro">Golden Hours glows with airy female vocals.<br/>Midnight Rooms moves with a soft male tenor.</p><div className="hero-actions"><a className="button button-primary" href="#golden-hours"><span className="play-dot"><Play size={15} fill="currentColor"/></span> Enter Golden Hours</a><a className="text-link" href="#midnight-rooms">Enter Midnight Rooms <ArrowDown size={16}/></a></div></div>
      <div className="hero-stamp" aria-hidden="true"><span>TWO</span><strong>SV</strong><span>SOULS</span></div>
      <div className="marquee"><span>GOLDEN HOURS • MIDNIGHT ROOMS • TWO VOICES • ONE SOLAR VELVET • GOLDEN HOURS • MIDNIGHT ROOMS • TWO VOICES • ONE SOLAR VELVET • </span></div>
    </section>

    <section className="duo" id="story"><div className="duo-copy"><p className="kicker light">THE TWO SOULS</p><h2>Two voices.<br/>One <i>world.</i></h2><p>She is the glow of Golden Hours, carrying Chill Disco with airy female vocals, sunset funk and coastal elegance. He is the pulse of Midnight Rooms, leading Late Night R&amp;B with a soft male tenor, dreamy beats and intimate soul.</p><div className="soul-pair"><span><strong>HER SOUL</strong><b>Golden Hours</b><small>CHILL DISCO · SUNSET FUNK</small></span><span><strong>HIS SOUL</strong><b>Midnight Rooms</b><small>LATE NIGHT R&amp;B · DREAMY SOUL</small></span></div></div><div className="duo-portrait"><img src={asset('/solar-velvet-duo-sunset.png')} alt="The two voices of Solar Velvet overlooking the sea at sunset"/><span className="orbit orbit-one">HER · GOLDEN HOURS</span><span className="orbit orbit-two">HIM · MIDNIGHT ROOMS</span></div></section>

    <section className="collection golden-collection section-pad" id="golden-hours"><div className="section-heading albums-title"><div><p className="kicker">HER VOICE / COLLECTION ONE</p><h2>Golden<br/><i>Hours</i></h2></div><p className="section-note">Chill Disco, Nu Disco and Sunset Funk.<br/>Airy female vocals in a coastal glow.</p></div><div className="album-grid golden-grid">{goldenHours.map((release)=><AlbumCard release={release} key={release.number}/>)}</div></section>

    <section className="collection midnight-collection section-pad" id="midnight-rooms"><div className="section-heading albums-title"><div><p className="kicker light">HIS VOICE / COLLECTION TWO</p><h2>Midnight<br/><i>Rooms</i></h2></div><p className="section-note">Chill R&amp;B, Late Night Soul and dreamy beats.<br/>A soft male tenor after the lights go low.</p></div><div className="midnight-layout"><div className="midnight-manifesto"><span>01</span><p>Low light. Slow movement. Intimate songs for the hours that belong to no one else.</p></div><div className="album-grid midnight-grid">{midnightRooms.map((release)=><AlbumCard release={release} key={release.number}/>)}</div></div></section>

    <section className="radio-banner"><Radio size={28}/><div><p>TWO VOICES · ONE FREQUENCY</p><h2>SOLAR VELVET</h2></div><a className="button button-cream" href="https://www.youtube.com/@solarvelvetmusic" target="_blank" rel="noreferrer"><Play size={16} fill="currentColor"/> Subscribe on YouTube</a></section>
    <footer><div className="footer-brand"><span className="sun-mark large"><i/><i/><i/></span><h2>SOLAR <b>VELVET</b></h2></div><p>Golden light. Midnight soul.</p><div className="footer-row"><span>© 2026 SOLAR VELVET</span><span><Headphones size={14}/> BEST EXPERIENCED LOUD</span><a href="#top">BACK TO THE SUN ↑</a></div></footer>
  </main>;
}
