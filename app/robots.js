import {site} from '@/lib/site';
export const dynamic = 'force-static';
export default function robots(){return {rules:[{userAgent:'*',allow:'/',disallow:'/admin'},{userAgent:['GPTBot','ChatGPT-User','OAI-SearchBot','ClaudeBot','PerplexityBot'],allow:'/',disallow:'/admin'}],sitemap:`${site.url}/sitemap.xml`,host:site.url}}
