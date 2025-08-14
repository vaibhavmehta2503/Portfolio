# Portfolio Backend - Messaging System

This is the backend server for handling contact form messages from your portfolio website.

## Features

- ✅ Receive contact form messages
- ✅ Email notifications when messages are received
- ✅ Auto-reply to message senders
- ✅ Message storage (in-memory)
- ✅ Message management (mark as read, delete)
- ✅ CORS enabled for frontend integration

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email Settings

Create a `.env` file in the backend directory with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Server Configuration
PORT=5000
```

**Important:** For Gmail, you need to use an App Password, not your regular password:
1. Enable 2-factor authentication on your Google account
2. Go to Google Account settings > Security > App passwords
3. Generate a new app password for "Mail"
4. Use that password in the EMAIL_PASS variable

### 3. Start the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on port 5000 (or the port specified in your .env file).

## API Endpoints

### Send Message
- **POST** `/api/send-message`
- **Body:** `{ "name": "string", "email": "string", "message": "string" }`

### Get All Messages
- **GET** `/api/messages`
- Returns all stored messages

### Mark Message as Read
- **PUT** `/api/messages/:id/read`
- Marks a specific message as read

### Delete Message
- **DELETE** `/api/messages/:id`
- Deletes a specific message

### Health Check
- **GET** `/api/health`
- Returns server status

## How It Works

1. **Message Reception:** When someone submits the contact form, the message is stored and you receive an email notification
2. **Auto-Reply:** The sender automatically receives a thank you email
3. **Message Management:** You can view, mark as read, and delete messages through the API

## Frontend Integration

The backend is configured to accept requests from `http://localhost:5173` (Vite dev server). Update the CORS origin in `server.js` if needed.

## Security Notes

- This is a basic implementation using in-memory storage
- For production, consider using a database (MongoDB, PostgreSQL, etc.)
- Add rate limiting to prevent spam
- Implement proper authentication for admin endpoints
- Use HTTPS in production

## Troubleshooting

- **Email not sending:** Check your Gmail app password and 2FA settings
- **CORS errors:** Verify the frontend URL matches the CORS origin in server.js
- **Port conflicts:** Change the PORT in your .env file
