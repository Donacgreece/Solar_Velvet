import { ArrowDown, ArrowUpRight, Headphones, Play, Radio } from 'lucide-react';

// Add each new YouTube release here. The first item becomes the featured release.
const releases = [
  { title: 'Riviera Nights', number: '001', year: '2026', mood: 'Golden hour · Coastal drive', image: '/riviera-nights.png', albumImage: '/album-riviera-nights-cd.png', youtube: 'https://www.youtube.com/@solarvelvetmusic' },
  { title: 'Vinyl Nights', number: '002', year: '2026', mood: 'After dark · Velvet grooves', image: '/album-vinyl-nights-cd.png', albumImage: '/album-vinyl-nights-cd.png', youtube: 'https://www.youtube.com/@solarvelvetmusic' },
];
const futureSets = ['Palm Radio', 'Midnight Coast'];

export default function Home() {
  const featured = releases[0];
  return <main>
    <header className="site-nav">
      <a className="wordmark" href="#top" aria-label="Solar Velvet home"><span className="sun-mark"><i/><i/><i/></span><span>SOLAR <b>VELVET</b></span></a>
      <nav aria-label="Main navigation"><a href="#latest">Latest</a><a href="#albums">Albums</a><a href="#story">The duo</a></nav>
      <a className="nav-cta" href="https://www.youtube.com/@solarvelvetmusic" target="_blank" rel="noreferrer">YouTube <ArrowUpRight size={14}/></a>
    </header>

    <section className="hero" id="top">
      <img className="hero-bg" src="/solar-velvet-cover.png" alt="Sunset over the Riviera"/><div className="hero-shade"/>
      <div className="hero-copy"><p className="eyebrow">CHILL DISCO · RIVIERA FREQUENCY</p><h1>Stay for the<br/><em>golden hour.</em></h1><p className="hero-intro">Slow grooves, warm nights and cinematic escapes.<br/>Broadcasting from somewhere near the sea.</p><div className="hero-actions"><a className="button button-primary" href={featured.youtube} target="_blank" rel="noreferrer"><span className="play-dot"><Play size={15} fill="currentColor"/></span> Play latest mix</a><a className="text-link" href="#latest">Explore the coast <ArrowDown size={16}/></a></div></div>
      <div className="hero-stamp" aria-hidden="true"><span>EST.</span><strong>SV</strong><span>2026</span></div>
      <div className="marquee"><span>SOLAR VELVET RADIO • CHILL DISCO ALL NIGHT • SOLAR VELVET RADIO • CHILL DISCO ALL NIGHT • </span></div>
    </section>

    <section className="latest section-pad" id="latest">
      <div className="section-heading"><div><p className="kicker">NOW PLAYING / {featured.number}</p><h2>Riviera<br/><i>Nights</i></h2></div><p className="section-note">A soundtrack for the moment<br/>the sky turns velvet.</p></div>
      <a className="feature-card" href={featured.youtube} target="_blank" rel="noreferrer" aria-label={`Play ${featured.title} on YouTube`}><img src={featured.image} alt={`${featured.title} — Solar Velvet chill disco mix`}/><span className="feature-overlay"/><span className="feature-meta"><b>EPISODE {featured.number}</b><small>{featured.mood}</small></span><span className="giant-play"><Play size={34} fill="currentColor"/></span><span className="duration">FULL MIX ↗</span></a>
    </section>

    <section className="duo" id="story"><div className="duo-copy"><p className="kicker light">MEET THE FREQUENCY</p><h2>Two souls.<br/>One <i>sunset.</i></h2><p>Selectors, dreamers and late-night drivers. Solar Velvet lives between coastal elegance and dancefloor nostalgia — every mix is a new scene in the same endless summer.</p><div className="duo-stats"><span><strong>01</strong> Season</span><span><strong>∞</strong> Summer</span><span><strong>24/7</strong> Mood</span></div></div><div className="duo-portrait"><img src="/solar-velvet-profile.png" alt="The Solar Velvet duo overlooking the sea"/><span className="orbit orbit-one">THE SELECTORS</span><span className="orbit orbit-two">RIVIERA / 43.7°N</span></div></section>

    <section className="albums section-pad" id="albums"><div className="section-heading albums-title"><div><p className="kicker">THE ARCHIVE</p><h2>Sunset<br/><i>sessions</i></h2></div><p className="section-note">A growing collection of<br/>chill disco journeys.</p></div><div className="album-grid">{releases.map((release)=><a className="album album-live" href={release.youtube} target="_blank" rel="noreferrer" key={release.number}><div className="album-art"><img src={release.albumImage} alt={`${release.title} CD artwork`}/><span><Play size={22} fill="currentColor"/></span></div><p><b>{release.title}</b><small>{release.year} · EPISODE {release.number}</small></p></a>)}{futureSets.map((title,index)=><article className="album album-soon" key={title}><div className="album-art"><span className="soon-number">0{index+3}</span><i>COMING SOON</i></div><p><b>{title}</b><small>UPCOMING SESSION</small></p></article>)}</div></section>

    <section className="radio-banner"><Radio size={28}/><div><p>THE SUN NEVER SETS ON</p><h2>SOLAR VELVET</h2></div><a className="button button-cream" href="https://www.youtube.com/@solarvelvetmusic" target="_blank" rel="noreferrer"><Play size={16} fill="currentColor"/> Subscribe on YouTube</a></section>
    <footer><div className="footer-brand"><span className="sun-mark large"><i/><i/><i/></span><h2>SOLAR <b>VELVET</b></h2></div><p>Chill disco for golden people.</p><div className="footer-row"><span>© 2026 SOLAR VELVET</span><span><Headphones size={14}/> BEST EXPERIENCED LOUD</span><a href="#top">BACK TO THE SUN ↑</a></div></footer>
  </main>;
}
