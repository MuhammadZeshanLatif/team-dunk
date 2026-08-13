import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getProduct,products} from '@/lib/products';

export function generateStaticParams(){return products.map(({slug})=>({slug}))}
export async function generateMetadata({params}){const {slug}=await params;const product=getProduct(slug);return product?{title:`${product.title} | Team Dunk Shop`,description:product.short}:{}}

export default async function ProductPage({params}){const {slug}=await params;const product=getProduct(slug);if(!product)notFound();return <main className="product-page">
  <section className="product-detail"><div className="container product-detail-grid"><div className="product-visual"><Image src={product.image} alt={product.alt} fill priority sizes="(max-width:850px) 100vw, 52vw"/><span>TEAM DUNK ORIGINAL</span></div><div className="product-copy"><Link className="product-back" href="/shop">← Back to shop</Link><p className="product-eyebrow">{product.eyebrow}</p><h1>{product.headline}</h1><p className="product-lead">{product.description}</p><ul>{product.features.map(feature=><li key={feature}>{feature}</li>)}</ul><div className="product-status"><small>AVAILABILITY</small><strong>{product.status}</strong></div><a className="orange-btn" href={`mailto:Simone.Harris@teamdunk.net?subject=${encodeURIComponent(`Team Dunk shop enquiry: ${product.title}`)}`}>Contact us about this item&nbsp; →</a><p className="us-note">Currently available in the United States only.</p></div></div></section>
  <section className="product-more"><div className="container"><div className="ref-heading"><span>KEEP EXPLORING</span><h2>More from the shop</h2></div><div className="product-more-grid">{products.filter(item=>item.slug!==slug).map(item=><Link href={`/shop/${item.slug}`} key={item.slug}><div><Image src={item.image} alt={item.alt} fill sizes="(max-width:700px) 100vw, 50vw"/></div><span>{item.eyebrow}</span><h3>{item.title} →</h3></Link>)}</div></div></section>
  </main>}

