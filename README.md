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
cp .env.example .env     # fill RESEND_API_KEY; MONGODB_URI is optional
npm install
npm run dev              # http://localhost:5000

# 2. Site (new terminal)
cd client
npm install
npm run dev              # http://localhost:5173, /api is proxied to :5000
```

### Email (Resend)
Mail is sent over HTTPS through [Resend](https://resend.com) because free hosts block SMTP.
Sign up with the inbox that should receive messages, create an API key and paste it as
`RESEND_API_KEY`. Without a verified domain Resend delivers only to that account's address,
which is all this form needs. Never commit `.env`.

## Deploy

- **API** (Render): `render.yaml` is a Blueprint. Create it from this repo, then enter `RESEND_API_KEY` when asked.
- **Client** (GitHub Pages): `.github/workflows/deploy.yml` builds and publishes on every push to `main`. Add a repo Actions variable `VITE_API_URL` set to the Render URL, and set Pages source to "GitHub Actions".
- **Domain**: DNS `www` CNAME to `sujanshrestha712.github.io`, plus the four GitHub Pages `A` records for the apex.

## Security notes

- Input validated with Zod; no line breaks allowed in name (prevents email header injection)
- Email content HTML-escaped; reply-to set to the visitor
- Helmet headers, strict CORS allow-list, 10kb body limit
- Rate limits: 100 requests / 15 min per IP, 5 messages / hour per IP
- Honeypot field silently drops bots
- Mongoose `sanitizeFilter` on; secrets only from environment variables
