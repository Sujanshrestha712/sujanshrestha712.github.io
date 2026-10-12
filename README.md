# Sujan Shrestha - Portfolio

MERN portfolio: a React front end and an Express + MongoDB API that emails contact-form messages to my inbox.

```
client/   React 19, Vite, Tailwind CSS 4, Motion   (static site)
server/   Express 5, Mongoose, Nodemailer, Zod      (contact API)
```

All page content lives in `client/src/data/portfolio.js`.

## Run locally

```bash
# 1. API
cd server
cp .env.example .env     # fill SMTP_PASS (Gmail App Password); MONGODB_URI is optional
npm install
npm run dev              # http://localhost:5000

# 2. Site (new terminal)
cd client
npm install
npm run dev              # http://localhost:5173, /api is proxied to :5000
```

### Gmail App Password
Google Account > Security > enable 2-Step Verification > App passwords > create one,
and paste it as `SMTP_PASS`. Never commit `.env`.

## Deploy

- **Client** (GitHub Pages / any static host): set `VITE_API_URL` to the deployed API URL, run `npm run build`, publish `client/dist`. `public/CNAME` keeps the custom domain.
- **API** (Render, Railway, etc.): root `server/`, start command `npm start`, set the variables from `.env.example`. Set `CLIENT_ORIGINS` to the site's exact origin (for example `https://www.shresthasujan712.com.np`).

## Security notes

- Input validated with Zod; no line breaks allowed in name (prevents email header injection)
- Email content HTML-escaped; reply-to set to the visitor
- Helmet headers, strict CORS allow-list, 10kb body limit
- Rate limits: 100 requests / 15 min per IP, 5 messages / hour per IP
- Honeypot field silently drops bots
- Mongoose `sanitizeFilter` on; secrets only from environment variables
