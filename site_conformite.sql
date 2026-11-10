-- À coller dans Supabase > SQL Editor, puis Run. Relançable sans risque.
-- 1) Date de l'accord donné dans les formulaires
alter table if exists public.waitlist add column if not exists consent_at timestamptz;
alter table if exists public.messages add column if not exists consent_at timestamptz;
alter table if exists public.contact_messages add column if not exists consent_at timestamptz;
-- 2) Désinscription : efface l'adresse de la liste d'attente (sans dire si elle y était)
create or replace function public.se_desinscrire(p_email text) returns void
language sql security definer set search_path = public as $$
  delete from public.waitlist where lower(email) = lower(trim(p_email));
$$;
revoke all on function public.se_desinscrire(text) from public;
grant execute on function public.se_desinscrire(text) to anon, authenticated;
