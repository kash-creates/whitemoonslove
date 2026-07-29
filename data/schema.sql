-- Run this once in Supabase → SQL Editor, on your project.
-- Creates the two tables the booking and contact forms write to.

create extension if not exists "pgcrypto";

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  event_date date not null,
  guest_count text not null,
  location text,
  name text not null,
  email text not null,
  phone text not null,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- Row Level Security: block all public access. Only the service-role
-- key (used by our server-side API routes, never sent to the browser)
-- can read/write. This is what keeps client data from being exposed.
alter table bookings enable row level security;
alter table contact_messages enable row level security;
