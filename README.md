# Sneh Travel

Complete React + Vite starter website for Sneh Travel.

## Requirements
- Node.js 20+ recommended
- Visual Studio Code
- Optional: Supabase project for enquiry/admin data

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, normally http://localhost:5173.

## Supabase setup

1. Copy `.env.example` to `.env`.
2. Add your Supabase project URL and anon key.
3. Open Supabase SQL Editor.
4. Run `supabase/schema.sql`.
5. For a production admin area, enable Supabase Auth and create an admin user.

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

Push this folder to GitHub and import the repository into Vercel. Add the same environment variables in Vercel.

## Notes

This package contains a polished public website and a starter admin dashboard. Replace placeholder images/content with your approved Sneh Travel assets before launch.
