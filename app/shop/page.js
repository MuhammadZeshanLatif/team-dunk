import Image from 'next/image';

export const metadata={title:'Shop | Team Dunk',description:'Shop official Team Dunk basketballs, mini hoops and upcoming Little Dunk apparel.'};

const products=[
  {
    title:'Little Dunk & Hero Dunk T-Shirts',
    eyebrow:'APPAREL · COMING SOON',
    image:'/images/shop/team-dunk-shirt.jpg',
    href:'https://www.teamdunk.net/copy-of-donation',
    text:'Rep your favorite basketball heroes with bold Little Dunk and Hero Dunk apparel celebrating their journey from the court to the animated series.',
    button:'View Apparel'
  },
  {
    title:'Purple Character Basketballs',
    eyebrow:'OFFICIAL & KIDS SIZES',
    image:'/images/shop/purple-basketball.jpg',
    href:'https://www.teamdunk.net/copy-of-t-shirt',
    text:'High-quality indoor and outdoor basketballs featuring Little Dunk and Hero Dunk, available in official size 7 and a kids size.',
    button:'Shop Basketballs'
  },
  {
    title:'Ultimate Deluxe Mini Hoops Set',
    eyebrow:'PLAY ANYWHERE',
    image:'/images/shop/mini-hoop.png',
    href:'https://www.teamdunk.net/copy-of-basketballs',
    text:'Bring the game to bedrooms, offices and playrooms with a durable backboard, hoop and vibrant Team Dunk character graphics.',
    button:'Shop Mini Hoop'
  }
];

export default function Shop(){return <main className="shop-page">
  <section className="shop-hero"><div className="container"><span>OFFICIAL TEAM DUNK MERCHANDISE</span><h1>PLAY BOLD.<br/>DREAM BIG.</h1><p>Bring the energy of Team Dunk home with character basketballs, mini hoops and apparel made to inspire creativity, teamwork and a love for the game.</p></div></section>
  <section className="shop-products"><div className="container"><div className="ref-heading"><span>THE TEAM DUNK SHOP</span><h2>Gear for the next generation</h2></div><div className="shop-grid">{products.map(product=><article className="shop-card" key={product.title}><div className="shop-image"><Image src={product.image} alt={product.title} fill sizes="(max-width:760px) 100vw, 33vw"/></div><div className="shop-card-copy"><span>{product.eyebrow}</span><h2>{product.title}</h2><p>{product.text}</p><a className="purple-btn" href={product.href} target="_blank" rel="noreferrer">{product.button}&nbsp; →</a></div></article>)}</div><p className="shop-note">Team Dunk products are currently available exclusively in the United States. Purchases are completed securely on TeamDunk.net.</p></div></section>
  </main>}
