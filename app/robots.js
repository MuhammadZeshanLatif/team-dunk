import {site} from '@/lib/site';
export const dynamic = 'force-static';
export default function robots(){return {rules:[{userAgent:'*',allow:'/'},{userAgent:['GPTBot','ChatGPT-User','OAI-SearchBot','ClaudeBot','PerplexityBot'],allow:'/'}],sitemap:`${site.url}/sitemap.xml`,host:site.url}}
