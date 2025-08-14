const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Vite dev server
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for messages (in production, use a database)
let messages = [];

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Routes

// Get all messages (for admin purposes)
app.get('/api/messages', (req, res) => {
  try {
    res.json({
      success: true,
      messages: messages,
      count: messages.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch messages'
    });
  }
});

// Send a new message
app.post('/api/send-message', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    if (!email.includes('@')) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address'
      });
    }

    // Create message object
    const newMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      status: 'unread'
    };

    // Store message
    messages.push(newMessage);

    // Send email notification
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: process.env.EMAIL_USER || 'your-email@gmail.com', // You'll receive the messages
        subject: `New Portfolio Message from ${name}`,
        html: `
          <h2>New Message from Portfolio Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        `
      };

      await transporter.sendMail(mailOptions);
      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    // Send auto-reply to sender
    try {
      const autoReplyOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: email,
        subject: 'Thank you for your message - Vaibhav Mehta',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for your message. I have received it and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Vaibhav Mehta</p>
        `
      };

      await transporter.sendMail(autoReplyOptions);
      console.log('Auto-reply sent successfully');
    } catch (autoReplyError) {
      console.error('Auto-reply sending failed:', autoReplyError);
    }

    res.json({
      success: true,
      message: 'Message sent successfully!',
      data: newMessage
    });

  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again.'
    });
  }
});

// Mark message as read
app.put('/api/messages/:id/read', (req, res) => {
  try {
    const { id } = req.params;
    const messageIndex = messages.findIndex(msg => msg.id === id);
    
    if (messageIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Message not found'
      });
    }

    messages[messageIndex].status = 'read';
    
    res.json({
      success: true,
      message: 'Message marked as read',
      data: messages[messageIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update message status'
    });
  }
});

// Delete a message
app.delete('/api/messages/:id', (req, res) => {
  try {
    const { id } = req.params;
    const messageIndex = messages.findIndex(msg => msg.id === id);
    
    if (messageIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Message not found'
      });
    }

    const deletedMessage = messages.splice(messageIndex, 1)[0];
    
    res.json({
      success: true,
      message: 'Message deleted successfully',
      data: deletedMessage
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete message'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Backend server is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📧 Email notifications: ${process.env.EMAIL_USER ? 'Configured' : 'Not configured'}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
});
