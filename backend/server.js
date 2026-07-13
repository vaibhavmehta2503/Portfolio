const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173';
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailTo = process.env.EMAIL_TO || emailUser;

const messages = [];

const escapeHtml = (value = '') =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);
app.use(express.json({ limit: '24kb' }));
app.use(express.urlencoded({ extended: true, limit: '24kb' }));

const transporter =
  emailUser && emailPass
    ? nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      })
    : null;

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Backend server is running',
    emailConfigured: Boolean(transporter && emailTo),
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/messages', (req, res) => {
  res.json({
    success: true,
    messages,
    count: messages.length,
  });
});

app.post('/api/send-message', async (req, res) => {
  try {
    const { name = '', email = '', message = '' } = req.body;
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required.',
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    if (!transporter || !emailTo) {
      return res.status(500).json({
        success: false,
        error: 'Email service is not configured. Set EMAIL_USER, EMAIL_PASS, and EMAIL_TO.',
      });
    }

    const newMessage = {
      id: Date.now().toString(),
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
      timestamp: new Date().toISOString(),
      status: 'unread',
    };

    messages.push(newMessage);

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br>');

    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      replyTo: trimmedEmail,
      to: emailTo,
      subject: `New Portfolio Message from ${trimmedName}`,
      html: `
        <h2>New Message from Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    try {
      await transporter.sendMail({
        from: `"Vaibhav Mehta" <${emailUser}>`,
        to: trimmedEmail,
        subject: 'Thank you for your message - Vaibhav Mehta',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Dear ${safeName},</p>
          <p>Thank you for your message. I have received it and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Vaibhav Mehta</p>
        `,
      });
    } catch (autoReplyError) {
      console.error('Auto-reply failed:', autoReplyError.message);
    }

    res.json({
      success: true,
      message: 'Message sent successfully.',
      data: newMessage,
    });
  } catch (error) {
    console.error('Error sending message:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again or email directly.',
    });
  }
});

app.put('/api/messages/:id/read', (req, res) => {
  const message = messages.find((item) => item.id === req.params.id);

  if (!message) {
    return res.status(404).json({
      success: false,
      error: 'Message not found.',
    });
  }

  message.status = 'read';
  res.json({
    success: true,
    message: 'Message marked as read.',
    data: message,
  });
});

app.delete('/api/messages/:id', (req, res) => {
  const messageIndex = messages.findIndex((item) => item.id === req.params.id);

  if (messageIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Message not found.',
    });
  }

  const [deletedMessage] = messages.splice(messageIndex, 1);
  res.json({
    success: true,
    message: 'Message deleted successfully.',
    data: deletedMessage,
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Email notifications: ${transporter && emailTo ? 'Configured' : 'Not configured'}`);
  console.log(`Allowed frontend origin: ${allowedOrigin}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
