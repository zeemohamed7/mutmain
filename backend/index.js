const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.error('OPENAI_API_KEY is not set in the environment variables.');
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI Configuration
const openai = new OpenAI({
  apiKey: openaiApiKey,
});

// Routes
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
  
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      });
  
      const aiMessage = completion.choices[0].message.content;
      res.json({ reply: aiMessage });
    } catch (error) {
      console.error('OpenAI error:', error);
  
      if (error.status === 429) {
        // Rate limit hit
        return res.status(429).json({
          error: 'You are sending messages too quickly. Please wait and try again shortly.',
        });
      }
  
      res.status(500).json({
        error: 'Something went wrong while getting a response from AI.',
      });
    }
  });
  

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
