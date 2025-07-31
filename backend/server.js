
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors'); // Import cors
// const dotenv = require('dotenv');
// const eventRoutes = require('./routes/eventRoutes'); // Adjust the path

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors()); // Enable CORS
// app.use(express.json()); // Middleware to parse JSON

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Use event routes
// app.use('/api', eventRoutes);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const dotenv = require('dotenv');
const eventRoutes = require('./routes/eventRoutes'); // Adjust the path

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    const allowedOrigins = ['https://campus-metrics-maestro-frontend.vercel.app', 'http://localhost:3000'];
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use event routes
app.use('/api', eventRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

