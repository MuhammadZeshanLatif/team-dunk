create extension if not exists "pgcrypto";

create table if not exists public.team_dunk_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  inquiry_type text not null default 'general',
  organization text,
  subject text,
  message text,
  page_source text,
  status text not null default 'new' check (status in ('new','in_progress','resolved','archived')),
  source text not null default 'website' check (source in ('website','admin_manual')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists team_dunk_inquiries_created_idx on public.team_dunk_inquiries(created_at desc);
create index if not exists team_dunk_inquiries_status_idx on public.team_dunk_inquiries(status);
alter table public.team_dunk_inquiries enable row level security;
drop policy if exists "public_insert_team_dunk_inquiries" on public.team_dunk_inquiries;
create policy "public_insert_team_dunk_inquiries" on public.team_dunk_inquiries for insert to anon,authenticated with check (source='website' or auth.role()='authenticated');
drop policy if exists "admin_all_team_dunk_inquiries" on public.team_dunk_inquiries;
create policy "admin_all_team_dunk_inquiries" on public.team_dunk_inquiries for all to authenticated using (true) with check (true);
