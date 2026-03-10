const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS 
  }
});


app.post('/send-score', async (req, res) => {
  const { name, score, correct, total } = req.body;

  if (!name || score === undefined) {
    return res.status(400).json({ error: 'Name and score are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'davidbanor27@gmail.com',
    subject: 'Legendary Exam Score',
    text: `Name: ${name}\nYour Legendary 1st in Course score: ${score} out of 500\nCorrect answers: ${correct} out of ${total}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Score sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});