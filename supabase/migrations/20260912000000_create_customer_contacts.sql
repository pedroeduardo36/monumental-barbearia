create table if not exists public.customer_contacts (
  id bigint generated always as identity primary key,
  name text not null constraint customer_contacts_name_length check (char_length(name) between 2 and 120),
  email text not null constraint customer_contacts_email_length check (char_length(email) between 5 and 254),
  phone text constraint customer_contacts_phone_length check (phone is null or char_length(phone) between 8 and 30),
  message text not null constraint customer_contacts_message_length check (char_length(message) between 2 and 2000),
  consent boolean not null constraint customer_contacts_consent_required check (consent),
  created_at timestamptz not null default now()
);

alter table public.customer_contacts enable row level security;

drop policy if exists "Visitors can submit customer contacts" on public.customer_contacts;
create policy "Visitors can submit customer contacts"
  on public.customer_contacts
  for insert
  to anon
  with check (consent is true);

revoke all on public.customer_contacts from anon, authenticated;
grant insert on public.customer_contacts to anon;
grant usage, select on sequence public.customer_contacts_id_seq to anon;

create index if not exists customer_contacts_created_at_idx
  on public.customer_contacts (created_at desc);
