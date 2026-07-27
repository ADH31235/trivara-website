# Trivara Consulting Services — Website

A Next.js 15 + Tailwind CSS v4 website for Trivara Consulting Services.

## What's inside

- **Pages:** Home, About, Services, Industries, Contact, Privacy, Terms
- **Brand tokens:** forest green / ivory palette + Playfair Display (serif) /
  Inter (sans) fonts, defined in `src/app/globals.css`
- **Components:** `Nav`, `Footer`, `ServiceCard`, `ContactForm`,
  `LogoWatermark` (currently unused, kept in case you want a subtle
  background logo treatment again later)
- **Logo:** `public/logo.png` (from your uploaded file)
- **Contact form backend:** `src/app/api/contact/route.ts` — sends form
  submissions via [Resend](https://resend.com) to info@trivaraservices.com

## Requirements

- [Node.js](https://nodejs.org) version 20 or later
- npm (comes with Node.js)

## Getting started

1. Open Terminal and navigate into this folder:
   ```
   cd path/to/trivara
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the local dev server:
   ```
   npm run dev
   ```
4. Open **http://localhost:3000** in your browser. Changes to any file
   under `src/` will reload automatically.

## Setting up the contact form (Resend)

Your domain (`trivaraservices.com`) is already verified in Resend using
Auto Configure with GoDaddy — the DNS records are live and confirmed, and
the code's "from" address is already updated to use your real domain.
Your Microsoft 365 mailbox is untouched; this only adds outbound sending
capability.

The only thing left is connecting your local project to your Resend
account:

1. **Get your API key** in Resend (API Keys → Create API Key)

2. **Add it to this project:**
   - Copy `.env.local.example` to a new file named `.env.local`
   - Paste your real key in:
     ```
     RESEND_API_KEY=re_your_actual_key_here
     ```
   - `.env.local` is already excluded from git/version control — it will
     never accidentally get shared or committed

3. **Restart the dev server** (`Ctrl+C`, then `npm run dev` again) so it
   picks up the new environment variable, and test the form — submissions
   will arrive at info@trivaraservices.com in your normal Outlook inbox.

When you deploy the site (see Deploying, below), you'll need to add the
same `RESEND_API_KEY` as an environment variable in your hosting
provider's dashboard too — it won't carry over automatically from your
local `.env.local` file.

## Before going live — things to finish

- [x] **Contact form:** wired to send via Resend (see setup steps above)
- [ ] **Legal pages:** `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`
      now have full draft content covering Hong Kong's PDPO and GDPR, with
      a "pending legal review" notice on each page. Have a Hong
      Kong-qualified lawyer review before removing that notice and
      launching.
- [ ] **Cookie consent banner:** not yet included — add one if you'll
      serve EU visitors or use analytics/marketing cookies.
- [ ] **Leadership bios:** currently no Leadership section on the About
      page at all — add one back in once you have real profiles/photos.
- [ ] **Company registration number:** add to the footer if you want it
      displayed for credibility.
- [ ] **Analytics/SEO:** add a real `sitemap.xml`, `robots.txt`, and an
      analytics tool of your choice (e.g. Plausible, GA4) before launch.
- [x] **Favicon:** generated from the "V" mark in your logo — see
      `src/app/favicon.ico`, `src/app/icon.png`, and
      `src/app/apple-icon.png`. Next.js auto-detects these filenames, so
      no extra code was needed to wire them up.

## Deploying

This is a standard Next.js app — it deploys to Vercel, Netlify, or any
Node.js host. For Vercel:
```
npx vercel
```
and follow the prompts to connect your `trivaraservices.com` domain.
Remember to add `RESEND_API_KEY` under the project's Environment
Variables settings in Vercel too.

## Project structure

```
src/
  app/
    layout.tsx           — global layout, fonts, nav/footer
    globals.css          — brand color/font tokens
    page.tsx              — homepage
    about/page.tsx
    services/page.tsx
    industries/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
    api/
      contact/route.ts    — sends contact form emails via Resend
  components/
    Nav.tsx
    Footer.tsx
    ServiceCard.tsx
    ContactForm.tsx
    LogoWatermark.tsx     — currently unused
public/
  logo.png
.env.local.example        — copy to .env.local and add your Resend key
```
