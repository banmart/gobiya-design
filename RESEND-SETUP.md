# Website review form

The "Free review" overlay on the homepage POSTs to `/api/review/`. The server sends the name, phone, website, email and the optional message to `steve@gobiya.com` through Resend, with the visitor's email as Reply-To. Only a successful Resend response shows the "Got it. Thank you." confirmation; failures keep the form details and show a retry message with the phone number and email.

## Configuration

The existing Vercel variable `RESEND_API` is used for the API key (`RESEND_API_KEY` is also accepted). The default sender is `Gobiya Agency <steve@gobiya.com>`; set `RESEND_FROM_EMAIL` to override it. The sender must use a domain verified in the Resend account. For local development, copy `.env.example` to `.env.local`, fill it privately, and restart the development server. Never use a `NEXT_PUBLIC_` prefix for these secrets. Ensure Vercel enables the variable in the intended Production or Preview environment and redeploy after environment changes.

This site requires Next.js server hosting (Node.js or compatible serverless functions). Deploy the Next.js application, not the old `out/` static export. Build with `npm run build`; a Node host can run `npm start`.

## Verification

Submit a clearly labelled test request after credentials are configured. Confirm the Resend email ID in the dashboard, delivery to Steve's inbox, all fields, Reply-To, and the on-page confirmation. A successful API response confirms acceptance by Resend, not inbox delivery. The endpoint uses Resend idempotency keys to avoid duplicate emails when identical requests are retried within 24 hours.

Run the endpoint tests with `node --test tests/review-api.test.cjs`.

API reference: https://resend.com/docs/api-reference/emails/send-email
