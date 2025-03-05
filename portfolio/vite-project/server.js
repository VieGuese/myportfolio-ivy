import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoutes from './backend/routes/contact.routes.js';
import userRoutes from './backend/routes/user.routes.js';

dotenv.config(); // Load environment variables from .env file  <---- IMPORTANT!

const app = express();
const port = process.env.PORT || 8080; // Use environment variable for port if available

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON request bodies

// MongoDB Connection
console.log("MongoDB URI:", process.env.MONGODB_URI); // Add this line for debugging
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/contacts', contactRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
