import {posts,site} from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(){const pages=['','/about','/team-dunk-ghana','/programs','/gallery','/dunkiverse','/blog','/contact']; return [...pages.map((p,i)=>({url:`${site.url}${p}`,lastModified:new Date('2026-08-09'),changeFrequency:p==='/blog'?'weekly':'monthly',priority:i===0?1:p==='/team-dunk-ghana'?0.9:0.8})),...posts.map(p=>({url:`${site.url}/blog/${p.slug}`,lastModified:new Date('2026-08-09'),changeFrequency:'monthly',priority:0.7}))]}
