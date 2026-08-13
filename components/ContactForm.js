'use client';
import {useState} from 'react';
import {submitInquiry} from '@/lib/supabase';

export default function ContactForm(){
  const [state,setState]=useState({sending:false,error:'',success:false});
  async function submit(event){event.preventDefault();setState({sending:true,error:'',success:false});const form=event.currentTarget;const values=Object.fromEntries(new FormData(form));const result=await submitInquiry({...values,pageSource:window.location.pathname});if(result.ok){form.reset();setState({sending:false,error:'',success:true})}else setState({sending:false,error:result.error,success:false})}
  return <form className="td-contact-form" onSubmit={submit}>
    <div className="td-form-head"><span>DROP US A MESSAGE</span><h2>How can we help?</h2><p>Tell us what you are interested in and our team will follow up.</p></div>
    <div className="td-form-grid"><label>Full name<input name="name" required autoComplete="name"/></label><label>Email address<input name="email" type="email" required autoComplete="email"/></label><label>Phone<input name="phone" type="tel" autoComplete="tel"/></label><label>I’m interested in<select name="inquiryType" defaultValue="general"><option value="general">General enquiry</option><option value="program">Programs & clinics</option><option value="volunteer">Volunteering</option><option value="sponsorship">Sponsorship</option><option value="donation">Donation</option><option value="ghana">Team Dunk Ghana</option><option value="event">Events & birthdays</option><option value="shop">Shop product</option></select></label><label className="full">Organization<input name="organization"/></label><label className="full">Subject<input name="subject"/></label><label className="full">Message<textarea name="message" rows="5" required/></label></div>
    {state.error&&<p className="td-form-error" role="alert">{state.error}</p>}{state.success&&<p className="td-form-success" role="status">Thank you! Your message has been received.</p>}
    <button type="submit" disabled={state.sending}>{state.sending?'Sending…':'Send message →'}</button>
  </form>
}
