const express = require('express');
const router = express.Router();
const { fetchAccounts } = require('../services/nessieService');

// Route to fetch accounts for a specific customer
router.get('/accounts/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const accounts = await fetchAccounts(customerId);
    res.json(accounts);  // Return the data to the frontend
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Nessie' });
  }
});

module.exports = router;
