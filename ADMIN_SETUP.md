# Team Dunk admin setup

Admin route: `/admin`

1. Create a separate Supabase project.
2. Open **SQL Editor**, paste the complete contents of `supabase/schema.sql`, and run it once.
3. Open **Authentication → Users → Add user** and create the admin email/password.
4. Copy `.env.example` to `.env.local` (or `.env`) and add the project URL and publishable key. Legacy `NEXT_PUBLIC_SUPABASE_ANON_KEY` is also supported.
5. Restart the Next.js server.

Public visitors can only insert website inquiries. Supabase RLS restricts reading, editing, status changes and deletion to authenticated users.

Do not place a Supabase service-role/secret key in `NEXT_PUBLIC_*` variables or browser code.
