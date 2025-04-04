const axios = require('axios');

// API endpoint
const url = 'https://api.example.com/data';

// Your API key
const apiKey = 'your-api-key';

// Headers with the API key
const headers = {
  'Authorization': `Bearer ${apiKey}`
};

// Sending GET request with API key in headers
axios.get(url, { headers })
  .then(response => {
    console.log("Request successful!");
    console.log(response.data);  // Print the response data
  })
  .catch(error => {
    console.log(`Request failed: ${error.response ? error.response.status : error.message}`);
  });