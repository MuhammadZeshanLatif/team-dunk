import Image from 'next/image';
import Link from 'next/link';
import {products} from '@/lib/products';

export const metadata={title:'Shop | Team Dunk',description:'Explore official Team Dunk basketballs, mini hoops and upcoming youth apparel.'};

export default function Shop(){return <main className="shop-page">
  <section className="shop-hero"><div className="container"><span>OFFICIAL TEAM DUNK MERCHANDISE</span><h1>PLAY BOLD.<br/>DREAM BIG.</h1><p>Bring the energy of Team Dunk home with basketball gear and apparel designed to inspire creativity, teamwork and a lifelong love for the game.</p><Link className="purple-btn" href="#collection">Explore the collection&nbsp; ↓</Link></div></section>
  <section className="shop-products" id="collection"><div className="container"><div className="ref-heading"><span>THE TEAM DUNK SHOP</span><h2>Gear for the next generation</h2></div><div className="shop-grid">{products.map(product=><article className="shop-card" key={product.slug}><Link className="shop-image" href={`/shop/${product.slug}`}><Image src={product.image} alt={product.alt} fill sizes="(max-width:760px) 100vw, 33vw"/></Link><div className="shop-card-copy"><span>{product.eyebrow}</span><h2>{product.title}</h2><p>{product.short}</p><Link className="purple-btn" href={`/shop/${product.slug}`}>{product.button}&nbsp; →</Link></div></article>)}</div><p className="shop-note">Products are currently available exclusively in the United States. Open a product to view details and contact Team Dunk about availability.</p></div></section>
  </main>}

