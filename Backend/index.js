const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.use(cors({
  origin: 'http://127.0.0.1:5500', // Allow requests from this origin only
  methods: ['GET', 'POST'], // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
}));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Function to send a POST request with Bearer token
async function sendPostRequestWithToken(url, data, token) {
  try {
    const response = await axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' // Assuming JSON data
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Example usage
const apiUrl = 'https://api.openai.com/v1/chat/completions';
const accessToken = ''; // Replace with your Bearer token

app.post("/getResponse", async (req, res, next) => {
  try {

    let content = req.body.content;

    const postData = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          "content": content
        }
      ]
    } // Your POST data

    let responseData = await sendPostRequestWithToken(apiUrl, postData, accessToken);
    res.status(200).json({ responseData: responseData.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

app.listen(5000, (() => {
  console.log("Application is Listening on port 5000");
}))
