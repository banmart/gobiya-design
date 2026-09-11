# Website review form

The homepage and Contact form POST to `/api/review/`. The server sends all four fields to `steve@gobiya.com` through Resend, with the visitor's email as Reply-To. Only a successful Resend response redirects to `/thank-you/`; failures keep the form details and show a retry message.

## Configuration

The existing Vercel variable `RESEND_API` is used for the API key (`RESEND_API_KEY` is also accepted). The default sender is `Gobiya Agency <steve@gobiya.com>`; set `RESEND_FROM_EMAIL` to override it. The sender must use a domain verified in the Resend account. For local development, copy `.env.example` to `.env.local`, fill it privately, and restart the development server. Never use a `NEXT_PUBLIC_` prefix for these secrets. Ensure Vercel enables the variable in the intended Production or Preview environment and redeploy after environment changes.

This site now requires Next.js server hosting (Node.js or compatible serverless functions). Deploy the Next.js application, not the old `out/` static export. Build with `npm run build`; a Node host can run `npm start`.

## Verification

Submit a clearly labelled test request after credentials are configured. Confirm the Resend email ID in the dashboard, delivery to Steve's inbox, all four contact fields, Reply-To, and the thank-you redirect. A successful API response confirms acceptance by Resend, not inbox delivery. The endpoint uses Resend idempotency keys to avoid duplicate emails when identical requests are retried within 24 hours.

API reference: https://resend.com/docs/api-reference/emails/send-email
