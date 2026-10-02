-- =========================================================
-- SNEH TRAVEL
-- COMPLETE SUPABASE DATABASE SCHEMA
-- =========================================================

create extension if not exists pgcrypto;


-- =========================================================
-- 1. CUSTOMER ENQUIRIES
-- =========================================================

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),

  name text not null default '',
  phone text not null default '',
  email text not null default '',

  destination text not null default '',
  travel_date date,

  adults integer not null default 0,
  children integer not null default 0,
  child_ages text not null default '',

  rooms integer not null default 0,

  hotel_category text not null default '',
  meal_plan text not null default '',
  transport text not null default '',

  budget text not null default '',
  message text not null default '',

  created_at timestamptz not null default now()
);


-- =========================================================
-- 2. TRAVEL PACKAGES
-- =========================================================

create table if not exists public.travel_packages (
  id uuid primary key default gen_random_uuid(),

  title text not null,
  slug text not null,

  package_type text not null default 'Domestic',

  destination text not null default '',
  duration text not null default '',
  subtitle text not null default '',
  description text not null default '',

  image_url text not null default '',

  price numeric(12,2) not null default 0,

  transport text not null default '',
  meal_plan text not null default '',

  inclusions text not null default '',
  exclusions text not null default '',

  published boolean not null default false,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


-- =========================================================
-- 3. PACKAGE ITINERARIES
-- =========================================================

create table if not exists public.travel_package_itineraries (
  id uuid primary key default gen_random_uuid(),

  package_id uuid not null
    references public.travel_packages(id)
    on delete cascade,

  day_number integer not null default 1,

  location text not null default '',
  title text not null default '',
  description text not null default '',
  activities text not null default '',

  created_at timestamptz not null default now()
);


-- =========================================================
-- 4. PACKAGE HOTELS
-- =========================================================

create table if not exists public.travel_package_hotels (
  id uuid primary key default gen_random_uuid(),

  package_id uuid not null
    references public.travel_packages(id)
    on delete cascade,

  city text not null default '',
  hotel_name text not null default '',

  category text not null default '',
  room_type text not null default '',
  meal_plan text not null default '',

  description text not null default '',

  price numeric(12,2) not null default 0,

  image_url text not null default '',

  created_at timestamptz not null default now()
);


-- =========================================================
-- 5. PACKAGE ACTIVITIES
-- =========================================================

create table if not exists public.travel_package_activities (
  id uuid primary key default gen_random_uuid(),

  package_id uuid not null
    references public.travel_packages(id)
    on delete cascade,

  title text not null default '',
  description text not null default '',

  price numeric(12,2) not null default 0,

  created_at timestamptz not null default now()
);


-- =========================================================
-- 6. PACKAGE TRANSPORT
-- =========================================================

create table if not exists public.travel_package_transport (
  id uuid primary key default gen_random_uuid(),

  package_id uuid not null
    references public.travel_packages(id)
    on delete cascade,

  vehicle_type text not null default '',
  vehicle_name text not null default '',

  description text not null default '',

  price numeric(12,2) not null default 0,

  created_at timestamptz not null default now()
);


-- =========================================================
-- 7. PACKAGE MEAL PLANS
-- =========================================================

create table if not exists public.travel_package_meal_plans (
  id uuid primary key default gen_random_uuid(),

  package_id uuid not null
    references public.travel_packages(id)
    on delete cascade,

  meal_code text not null default '',
  meal_name text not null default '',

  description text not null default '',

  price numeric(12,2) not null default 0,

  created_at timestamptz not null default now()
);


-- =========================================================
-- 8. INDEXES
-- =========================================================

create index if not exists idx_enquiries_created_at
on public.enquiries(created_at desc);

create index if not exists idx_enquiries_destination
on public.enquiries(destination);

create index if not exists idx_packages_created_at
on public.travel_packages(created_at desc);

create index if not exists idx_packages_published
on public.travel_packages(published);

create index if not exists idx_packages_slug
on public.travel_packages(slug);

create index if not exists idx_itinerary_package
on public.travel_package_itineraries(package_id);

create index if not exists idx_hotels_package
on public.travel_package_hotels(package_id);

create index if not exists idx_activities_package
on public.travel_package_activities(package_id);

create index if not exists idx_transport_package
on public.travel_package_transport(package_id);

create index if not exists idx_meals_package
on public.travel_package_meal_plans(package_id);


-- =========================================================
-- 9. UPDATED_AT FUNCTION
-- =========================================================

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;


drop trigger if exists travel_packages_updated_at
on public.travel_packages;

create trigger travel_packages_updated_at
before update on public.travel_packages
for each row
execute function public.set_updated_at();


-- =========================================================
-- 10. ENABLE ROW LEVEL SECURITY
-- =========================================================

alter table public.enquiries enable row level security;

alter table public.travel_packages enable row level security;

alter table public.travel_package_itineraries enable row level security;

alter table public.travel_package_hotels enable row level security;

alter table public.travel_package_activities enable row level security;

alter table public.travel_package_transport enable row level security;

alter table public.travel_package_meal_plans enable row level security;


-- =========================================================
-- 11. ENQUIRY POLICIES
-- =========================================================

drop policy if exists "Public can submit enquiries"
on public.enquiries;

create policy "Public can submit enquiries"
on public.enquiries
for insert
to anon, authenticated
with check (true);


drop policy if exists "Authenticated users can view enquiries"
on public.enquiries;

create policy "Authenticated users can view enquiries"
on public.enquiries
for select
to authenticated
using (true);


drop policy if exists "Authenticated users can delete enquiries"
on public.enquiries;

create policy "Authenticated users can delete enquiries"
on public.enquiries
for delete
to authenticated
using (true);


-- =========================================================
-- 12. PACKAGE POLICIES
-- =========================================================

drop policy if exists "Public can view published packages"
on public.travel_packages;

create policy "Public can view published packages"
on public.travel_packages
for select
to anon, authenticated
using (published = true);


drop policy if exists "Authenticated users can manage packages"
on public.travel_packages;

create policy "Authenticated users can manage packages"
on public.travel_packages
for all
to authenticated
using (true)
with check (true);


-- =========================================================
-- 13. ITINERARY POLICIES
-- =========================================================

drop policy if exists "Public can view published itineraries"
on public.travel_package_itineraries;

create policy "Public can view published itineraries"
on public.travel_package_itineraries
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.travel_packages p
    where p.id = package_id
      and p.published = true
  )
);


drop policy if exists "Authenticated users can manage itineraries"
on public.travel_package_itineraries;

create policy "Authenticated users can manage itineraries"
on public.travel_package_itineraries
for all
to authenticated
using (true)
with check (true);


-- =========================================================
-- 14. HOTEL POLICIES
-- =========================================================

drop policy if exists "Public can view published hotels"
on public.travel_package_hotels;

create policy "Public can view published hotels"
on public.travel_package_hotels
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.travel_packages p
    where p.id = package_id
      and p.published = true
  )
);


drop policy if exists "Authenticated users can manage hotels"
on public.travel_package_hotels;

create policy "Authenticated users can manage hotels"
on public.travel_package_hotels
for all
to authenticated
using (true)
with check (true);


-- =========================================================
-- 15. ACTIVITY POLICIES
-- =========================================================

drop policy if exists "Public can view published activities"
on public.travel_package_activities;

create policy "Public can view published activities"
on public.travel_package_activities
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.travel_packages p
    where p.id = package_id
      and p.published = true
  )
);


drop policy if exists "Authenticated users can manage activities"
on public.travel_package_activities;

create policy "Authenticated users can manage activities"
on public.travel_package_activities
for all
to authenticated
using (true)
with check (true);


-- =========================================================
-- 16. TRANSPORT POLICIES
-- =========================================================

drop policy if exists "Public can view published transport"
on public.travel_package_transport;

create policy "Public can view published transport"
on public.travel_package_transport
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.travel_packages p
    where p.id = package_id
      and p.published = true
  )
);


drop policy if exists "Authenticated users can manage transport"
on public.travel_package_transport;

create policy "Authenticated users can manage transport"
on public.travel_package_transport
for all
to authenticated
using (true)
with check (true);


-- =========================================================
-- 17. MEAL PLAN POLICIES
-- =========================================================

drop policy if exists "Public can view published meals"
on public.travel_package_meal_plans;

create policy "Public can view published meals"
on public.travel_package_meal_plans
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.travel_packages p
    where p.id = package_id
      and p.published = true
  )
);


drop policy if exists "Authenticated users can manage meals"
on public.travel_package_meal_plans;

create policy "Authenticated users can manage meals"
on public.travel_package_meal_plans
for all
to authenticated
using (true)
with check (true);


-- =========================================================
-- COMPLETE
-- =========================================================