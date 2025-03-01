const axios = require('axios');

const API_KEY = process.env.NESSIE_API_KEY;  // Store the API key in environment variables
const BASE_URL = 'https://api.nessieisreal.com/';  // Capital One API base URL

// Function to fetch customer accounts from Nessie
const fetchAccounts = async (customerId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}customers/${customerId}/accounts?key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Nessie:', error);
    throw error;
  }
};

module.exports = { fetchAccounts };
