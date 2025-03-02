// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// require('dotenv').config();  // Load environment variables

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(cors());  // This will allow all origins by default
// app.use(bodyParser.json());  // Parse incoming request bodies as JSON

// // MongoDB connection (replace with your MongoDB URI or Atlas URI)
// mongoose.connect('mongodb+srv://aditiak4:fluid@fluid.ruosw.mongodb.net/?retryWrites=true&w=majority&appName=fluid', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('MongoDB connection error:', err));

// // Simple route to test if the server is running
// app.get('/', (req, res) => {
//   res.send('Hello from the backend!');
// });

// // // Add new goal
// // const Goal = require('./models/schema');  // Import the Goal model from schema.js

// // app.post('/addGoal', (req, res) => {
// //   const { client_id, goal } = req.body;

// //   const newGoal = new Goal({
// //     client_id,
// //     goals: goal
// //   });

// //   newGoal.save()
// //     .then(result => res.status(201).json({ message: 'Goal added!', data: result }))
// //     .catch(err => res.status(500).json({ error: err.message }));
// // });


// // const nessieRoutes = require('./routes/nessieRoutes');

// // app.use(express.json());
// // app.use('/api/nessie', nessieRoutes);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

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

// User model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});
const User = mongoose.model('User', UserSchema);


// Route to handle login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    // Compare password with hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: 'Incorrect password' });
    }

    // If username exists and password is correct, send success response
    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


// Route to create a new user
app.post('/createUser', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    // If username is not taken, create a new user
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

// Route to clear all users and add test users
app.post('/resetUsers', async (req, res) => {
  try {
    // Delete all users
    await User.deleteMany({});

    // Call the function to create the test users
    await createTestUsers();

    res.status(200).json({ message: 'Users reset and test users added' });
  } catch (error) {
    res.status(500).json({ error: 'Error resetting users' });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});





