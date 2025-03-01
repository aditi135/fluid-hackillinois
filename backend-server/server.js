const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();  // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());  // This will allow all origins by default
app.use(bodyParser.json());  // Parse incoming request bodies as JSON

// MongoDB connection (replace with your MongoDB URI or Atlas URI)
mongoose.connect('mongodb+srv://aditiak4:fluid@fluid.ruosw.mongodb.net/?retryWrites=true&w=majority&appName=fluid', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Simple route to test if the server is running
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Add new goal
const Goal = require('./models/schema');  // Import the Goal model from schema.js

app.post('/addGoal', (req, res) => {
  const { client_id, goal } = req.body;

  const newGoal = new Goal({
    client_id,
    goals: goal
  });

  newGoal.save()
    .then(result => res.status(201).json({ message: 'Goal added!', data: result }))
    .catch(err => res.status(500).json({ error: err.message }));
});


const nessieRoutes = require('./routes/nessieRoutes');

app.use(express.json());
app.use('/api/nessie', nessieRoutes);



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


