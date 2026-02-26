import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import rsvpRoutes from './src/routes/rsvpRoutes.js';

const app = express();

// Standard middleware for luxury web apps
app.use(cors({
  origin: 'https://rsvps-frontend-ix2v.vercel.app', // Change this from 3000 to 5173
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/rsvp', rsvpRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});