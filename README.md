# Stuccord Web — portfolio

A one-page portfolio built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion. It exports to plain static files, so it is fast and can be hosted anywhere.

## Editing content

Everything you will want to change is in two files:

- `content/site.ts` — text, projects, packages and prices, testimonials, FAQ, contact details, your domain.
- `content/demo.ts` — the business types, colours and sample content used by the "See your business online" demo.

Search `content/site.ts` for `TODO` to find the placeholders still waiting for real information (domain, prices, testimonials, photo).

Project screenshots live in `public/projects/`. Each project has a desktop and a mobile image, plus a half-size `-sm` copy that phones download.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the finished site to /out
```

## Sharing a personalised demo link

Add the business name and type to the address:

```
https://your-domain.com/?name=Linda+Dor&type=restaurant
```

Types: `restaurant`, `hotel`, `salon`, `clinic`, `school`, `realestate`, `shop`. The quickest way is to fill in the demo on the site and press "Copy a link to this preview".

## Deploying to Vercel

1. Put the project on GitHub (create a repository, then push this folder to it).
2. Go to vercel.com, sign in with GitHub, choose **Add New → Project** and import the repository.
3. Leave every setting as it is (Vercel detects Next.js) and press **Deploy**.
4. In `content/site.ts`, set `url` to your real address and push again. This keeps the sitemap and the WhatsApp link preview pointing at the right place.

## Connecting a custom domain

1. In Vercel open the project, then **Settings → Domains**, and add your domain (for example `stuccordweb.com`).
2. Vercel shows the DNS records to add. At the company where you bought the domain, add them:
   - an **A** record for `@` pointing to the address Vercel shows, and
   - a **CNAME** record for `www` pointing to the value Vercel shows.
3. Wait for Vercel to show the domain as valid (usually minutes, sometimes a few hours). HTTPS is set up automatically.
