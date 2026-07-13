# Portfolio Backend - Contact Form

This backend lets the portfolio contact form send email directly from the website.

## Why A Backend Is Needed

The React app cannot safely send Gmail directly by itself because that would expose your
email password or app password in the browser. The contact form must call a backend, and
the backend sends the email securely with Nodemailer.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `backend/.env`:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=vaibhavmehtajp098@gmail.com
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

3. Start the backend:

```bash
npm start
```

4. Start the frontend in another terminal:

```bash
npm run dev
```

In development, the frontend automatically uses `http://localhost:5000`.

## Production

Deploy this backend to a host such as Render, Railway, Fly.io, or a VPS. Then set this
environment variable for the frontend before building:

```env
VITE_CONTACT_API_URL=https://your-backend-url.com
```

Without `VITE_CONTACT_API_URL` in production, the form will not open the user's email
app. It will show a configuration message instead.

## Gmail App Password

For Gmail, use an app password, not your regular password.

1. Enable 2-step verification on your Google account.
2. Go to Google Account settings > Security > App passwords.
3. Generate an app password for Mail.
4. Put that value in `EMAIL_PASS`.

## Endpoints

- `GET /api/health`
- `POST /api/send-message`
- `GET /api/messages`
- `PUT /api/messages/:id/read`
- `DELETE /api/messages/:id`
