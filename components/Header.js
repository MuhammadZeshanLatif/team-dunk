'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links=[['Programs','/programs'],['Dunkiverse','/dunkiverse'],['Team Dunk Ghana','/team-dunk-ghana'],['Shop','/shop'],['Resources','/blog'],['About','/about']];
export default function Header(){const [open,setOpen]=useState(false);const path=usePathname();if(path.startsWith('/admin'))return null;return <>
  <Link className="announcement" href="/team-dunk-ghana">◉ &nbsp; Little Dunk LIVE has returned from Ghana — see the journey &nbsp; →</Link>
  <header className="ref-header"><div className="ref-nav container">
    <Link href="/" className="ref-logo"><Image src="/images/team/team-dunk-logo-transparent.webp" alt="Team Dunk logo" width={110} height={110} priority/></Link>
    <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Toggle navigation"><i/><i/><i/></button>
    <nav className={open?'ref-links open':'ref-links'} aria-label="Main navigation">{links.map(([label,href])=><Link className={path===href?'active':''} href={href} key={label} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="ref-involved" href="/contact">Get Involved</Link><Link className="ref-donate" href="/contact">Donate</Link></nav>
  </div></header></>}

