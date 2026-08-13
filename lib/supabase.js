import { createClient } from '@supabase/supabase-js';

const url=process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const anonKey=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
let client;

export function isSupabaseConfigured(){return Boolean(url && anonKey)}
export function getSupabase(){
  if(!isSupabaseConfigured()) throw new Error('Supabase is not configured.');
  if(!client) client=createClient(url,anonKey,{auth:{persistSession:true,autoRefreshToken:true,storageKey:'team-dunk-admin-auth'}});
  return client;
}

export async function submitInquiry(payload){
  if(!isSupabaseConfigured()) return {ok:false,error:'The contact service is being configured. Please email Team Dunk for now.'};
  if(!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) return {ok:false,error:'Name, email and message are required.'};
  const {error}=await getSupabase().from('team_dunk_inquiries').insert({
    name:payload.name.trim(),email:payload.email.trim(),phone:payload.phone?.trim()||null,
    inquiry_type:payload.inquiryType||'general',organization:payload.organization?.trim()||null,
    subject:payload.subject?.trim()||null,message:payload.message.trim(),page_source:payload.pageSource||'/contact',
    status:'new',source:'website'
  });
  if(error){console.error('team_dunk_inquiries insert failed:',error.code,error.message);return {ok:false,error:'Your message could not be sent. Please try again.'}}
  return {ok:true};
}

export async function signIn(email,password){const {error}=await getSupabase().auth.signInWithPassword({email,password});return error?{ok:false,error:error.message}:{ok:true}}
export async function signOut(){await getSupabase().auth.signOut()}
export async function getSession(){return (await getSupabase().auth.getSession()).data.session}
export async function fetchInquiries(){const {data,error}=await getSupabase().from('team_dunk_inquiries').select('*').order('created_at',{ascending:false}).limit(500);if(error)throw error;return data||[]}
export async function addInquiry(fields){const {error}=await getSupabase().from('team_dunk_inquiries').insert({...clean(fields),source:'admin_manual'});if(error)throw error}
export async function updateInquiry(id,fields){const {error}=await getSupabase().from('team_dunk_inquiries').update(clean(fields)).eq('id',id);if(error)throw error}
export async function updateInquiryStatus(id,status){const {error}=await getSupabase().from('team_dunk_inquiries').update({status}).eq('id',id);if(error)throw error}
export async function deleteInquiry(id){const {error}=await getSupabase().from('team_dunk_inquiries').delete().eq('id',id);if(error)throw error}
function clean(f){return {name:f.name,email:f.email||null,phone:f.phone||null,inquiry_type:f.inquiry_type||'general',organization:f.organization||null,subject:f.subject||null,message:f.message||null,page_source:f.page_source||'/admin',status:f.status||'new'}}
