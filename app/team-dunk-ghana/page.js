import Image from 'next/image';
import Link from 'next/link';
import {metadata as makeMeta} from '@/lib/site';

export const metadata=makeMeta('Team Dunk Ghana','Developing future champions on and off the court through basketball, leadership and community partnership.','/team-dunk-ghana');

const pillars=[
  ['◉','Play','High-quality basketball training that builds skills, teamwork and a lifelong love of the game.'],
  ['♢','Lead','Leadership development that empowers youth to lead with confidence and integrity.'],
  ['▤','Grow','Academic support and life skills that open doors to opportunity and personal growth.'],
  ['♧','Connect','Stronger communities built through mentorship, family engagement and shared purpose.']
];

const journey=[
  ['01','Plan','We identify communities, partner with leaders and design impactful programs.'],
  ['02','Prepare','We train coaches, gather resources and prepare youth for the experience.'],
  ['03','Travel','We bring our team to Ghana to teach, train and build relationships.'],
  ['04','Impact','We leave resources, continuity and hope that lasts all year long.']
];

export default function Ghana(){return <main className="ghana-redesign">
  <section className="gh-hero"><Image src="/images/ghana/redesign/ghana-hero.webp" alt="Coach Alico Dunk in a basketball arena with the Ghana flag" fill priority sizes="100vw"/><div className="gh-hero-shade"/><div className="container gh-hero-inner"><div className="gh-hero-copy"><span>GHANA YOUTH BASKETBALL INITIATIVE</span><h1>DEVELOPING<br/>FUTURE CHAMPIONS</h1><h2>ON AND OFF THE COURT</h2><p>Team Dunk Ghana empowers young people through basketball, leadership and life skills—building confidence, character and community.</p><div className="gh-actions"><Link href="/contact" className="gh-orange">Partner with us</Link><Link href="/gallery" className="gh-outline">View gallery</Link></div></div><div className="gh-date"><b>▣</b><span><strong>JULY 2026</strong>GHANA</span></div></div></section>

  <section className="gh-proof"><div className="container"><article><b>GH</b><div><strong>ROOTED IN GHANA</strong><span>Building brighter futures in communities across Ghana.</span></div></article><article><b>♧</b><div><strong>WHOLE-CHILD DEVELOPMENT</strong><span>Focusing on character, leadership, academics and well-being.</span></div></article><article><b>◇</b><div><strong>ONE TEAM. SHARED PURPOSE.</strong><span>Uniting youth, families and partners to create lasting change.</span></div></article></div></section>

  <section className="gh-story"><div className="container gh-story-grid"><div><span className="gh-kicker">OUR STORY</span><h2>GLOBAL MISSION.<br/>GHANAIAN FUTURE.</h2><p>Team Dunk Ghana is a youth development initiative using basketball as a catalyst to inspire potential, strengthen communities and cultivate the next generation of leaders.</p><ul><li>Life skills and leadership for real-world success</li><li>Mentorship, academics and personal growth</li><li>Safe spaces to play, learn and belong</li><li>Building pathways to college and beyond</li></ul><Link href="/about" className="gh-orange">Learn more about our mission</Link></div><div className="gh-story-photo"><Image src="/images/ghana/ghana-youth-basketball.webp" alt="Team Dunk youth team with the Little Dunk mascot" fill sizes="(max-width:800px) 100vw, 50vw"/></div></div></section>

  <section className="gh-pillars"><div className="container"><p className="gh-section-label">OUR PROGRAM PILLARS</p><div className="gh-pillar-grid">{pillars.map(([icon,title,text])=><article key={title}><div><b>{icon}</b><h3>{title}</h3></div><p>{text}</p></article>)}</div></div></section>

  <section className="gh-impact"><Image src="/images/ghana/redesign/clinic-impact.webp" alt="Coach leading a Team Dunk basketball clinic" fill sizes="100vw"/><div className="gh-impact-shade"/><div className="container gh-impact-content"><div><h2>BASKETBALL THAT<br/>BUILDS CONFIDENCE</h2><p>On the court, we teach more than basketball. We build courage, discipline and belief in what’s possible.</p></div><div className="gh-metrics"><article><b>500+</b><span>Youth<br/>Served</span></article><article><b>20+</b><span>Communities<br/>Impacted</span></article><article><b>15+</b><span>Coaches &<br/>Mentors</span></article><article><b>100%</b><span>Commitment<br/>to Growth</span></article></div></div></section>

  <section className="gh-journey"><div className="container gh-journey-card"><h2>THE TEAM DUNK GHANA JOURNEY</h2><div className="gh-journey-grid">{journey.map(([num,title,text])=><article key={title}><b>{num}</b><h3>{title}</h3><p>{text}</p></article>)}<div className="gh-map"><Image src="/images/ghana/africa-ghana-journey.webp" alt="Map of Africa highlighting Ghana" fill sizes="250px"/><strong>ONE TRIP.<br/>LASTING CHANGE.</strong><Link href="/contact">Join the journey</Link></div></div></div></section>

  <section className="gh-gallery"><div className="container"><h2><span/>BUILT WITH GHANA, FOR GHANA<span/></h2><div className="gh-gallery-grid"><figure><Image src="/images/ghana/ghana-youth-basketball.webp" alt="Team Dunk community" fill sizes="25vw"/><figcaption>Stronger Together</figcaption></figure><figure><Image src="/images/ghana/redesign/clinic-impact.webp" alt="Basketball coaching in action" fill sizes="25vw"/><figcaption>Coaching in Action</figcaption></figure><figure><Image src="/images/dunkiverse/dunkiverse-portal-clean.webp" alt="The Dunkiverse characters" fill sizes="25vw"/><figcaption>The Dunkiverse Inspires</figcaption></figure><figure><Image src="/images/ghana/redesign/ghana-youth-team.webp" alt="Ghanaian youth basketball players" fill sizes="25vw"/><figcaption>Next Generation Leaders</figcaption></figure></div><p>Real kids. Real coaches. Real impact. This is Team Dunk Ghana.</p></div></section>

  </main>}
