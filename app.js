const express = require('express');
const app = express();
const db = require('./config/db');
const leadsRoutes = require('./routes/LeadsRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/leads', leadsRoutes);
// Define other routes

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
