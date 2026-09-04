import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import {metadata as makeMeta} from '@/lib/site';

export const metadata=makeMeta('The Dunkiverse on Roblox','Explore the Dunkiverse: original basketball stories, characters, music and interactive Roblox adventures.','/dunkiverse');

const experiences=[
  ['Stories & Characters','Meet Little Dunk, Glow Dunk, Hoopnaria, Turbo Dunk, Mystical Coach Dunk and more as their stories unfold across The Dunkiverse.','/images/dunkiverse/dunkiverse-character-one.webp'],
  ['Play the Dunkiverse','Step inside the universe on Roblox to explore worlds, take on basketball challenges, race, discover quests and experience the adventure yourself.','/images/dunkiverse/roblox-ghana-world.webp'],
  ['Music & Movement','Turn up original Dunkiverse music, learn the Dunkiverse Shuffle and move with the characters on and off the court.','/images/dunkiverse/dunkiverse-character-three.webp']
];

export default function Dunkiverse(){return <div className="dunkiverse-page">
  <PageHero dark eyebrow="Welcome to the Dunkiverse" title="Enter the Dunkiverse" text="A growing universe where basketball, heroes, stories, music, gaming and adventure collide. Meet the characters, follow their stories, and step inside the action on Roblox." image="/images/dunkiverse/dunkiverse-hero-2026.png" alt="Dunkiverse heroes entering a glowing basketball universe">
    <a className="button neon" href="https://www.youtube.com/playlist?list=PLQiWn1YouIfM" target="_blank" rel="noreferrer">Watch the Stories ↗</a>
    <a className="button ghost" href="https://www.roblox.com/join/ik3kw" target="_blank" rel="noreferrer">Play on Roblox ↗</a>
  </PageHero>
  <div className="separation-note"><div className="container"><b>DUNKIVERSE ≠ TEAM DUNK GHANA</b><span>The Dunkiverse is our fictional Roblox experience. Team Dunk Ghana is our real-world youth initiative.</span></div></div>
  <section id="world" className="section"><div className="container split"><div className="dunkiverse-art"><Image src="/images/dunkiverse/dunkiverse-roblox-heroes.webp" alt="Dunkiverse animated basketball heroes" fill sizes="(max-width: 800px) 100vw, 50vw"/></div><div><SectionTitle eyebrow="What is the Dunkiverse?" title="Watch. Play. Move. Discover."/><p>The Dunkiverse is an original entertainment universe where basketball, storytelling, music, gaming and adventure come together. Follow a growing cast of heroes through animated stories, original music and interactive experiences — then step inside their world on Roblox.</p><ul className="neon-list"><li>Watch original animated Dunkiverse stories</li><li>Meet Little Dunk, Glow Dunk, Hoopnaria, Turbo Dunk and more</li><li>Explore worlds, quests and basketball challenges on Roblox</li><li>Move to original music and the Dunkiverse Shuffle</li><li>Discover stories about confidence, teamwork, identity and finding your own power</li></ul></div></div></section>
  <section className="section universe-dark"><div className="container"><SectionTitle eyebrow="A universe with heart" title="Big adventures. Strong values." center/><div className="universe-values"><span>Confidence</span><span>Emotional Awareness</span><span>Problem Solving</span><span>Global Diversity</span><span>Teamwork</span><span>Kindness</span></div><div className="character-grid">{experiences.map(([title,text,src])=><article key={title}><div><Image src={src} alt={title} fill sizes="(max-width:800px) 100vw, 33vw"/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="section ghana-world"><div className="container split"><div><p className="eyebrow">Inside Roblox only</p><h2>Explore Ghana World</h2><p>Inspired by Team Dunk&apos;s real-world connection to Ghana, Ghana World brings basketball, music, culture and adventure into the fictional Dunkiverse. Explore AfroDunk Village, take on challenges, discover new experiences and feel the energy of Ghana inside Roblox.</p><p className="ghana-world-note">Ghana World is part of the fictional Dunkiverse experience. Team Dunk Ghana is our separate real-world youth initiative creating basketball opportunities in Ghana.</p><div className="ref-buttons"><a className="button neon" href="https://www.roblox.com/join/ik3kw" target="_blank" rel="noreferrer">Explore Ghana World ↗</a><Link className="button ghost" href="/team-dunk-ghana">Discover Team Dunk Ghana</Link></div></div><div className="world-map"><Image src="/images/dunkiverse/ghana-world-map.webp" alt="Illustrated Ghana World map inside the Dunkiverse Roblox experience" fill sizes="50vw"/></div></div></section>
  </div>}
