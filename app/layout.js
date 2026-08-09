import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Team Dunk | Youth Basketball, Mentorship & Creativity', template: '%s | Team Dunk' },
  description: 'Team Dunk empowers young people through basketball, mentorship, storytelling and creative learning in the United States and Ghana.',
  manifest: '/manifest.webmanifest',
  applicationName: 'Team Dunk', creator: 'Team Dunk Corporation', publisher: 'Team Dunk Corporation',
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  const schema = { '@context':'https://schema.org', '@type':'NonprofitOrganization', name:'Team Dunk Corporation', url:site.url, email:site.email, telephone:site.phone, description:'Youth development through basketball, mentorship, creativity and education.', address:{'@type':'PostalAddress', postOfficeBoxNumber:'12222', addressLocality:'Wilmington', addressRegion:'DE', postalCode:'19850', addressCountry:'US'} };
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>;
}
