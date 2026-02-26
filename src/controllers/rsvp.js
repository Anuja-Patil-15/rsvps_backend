import { db } from '../../db/index.js';  // Adjust path to point to your db folder
import { rsvps } from '../../db/schema.js';
export const submitRSVP = async (req, res) => {
  // 1. Get ALL data from req.body (No more req.user)
  const { 
    name, 
    email,
    tableCompanion, 
    dietary, 
    liquor, 
    children, 
    brunch, 
    tshirtSize 
  } = req.body;

  // 2. Simple validation
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }

  try {
    // 3. Insert into PostgreSQL
    const newEntry = await db.insert(rsvps).values({
      name,
      email: email.toLowerCase(),
      tableCompanion,
      dietary,
      liquor,
      children,
      brunch,
      tshirtSize
    }).returning();

    return res.status(201).json({
      message: 'RSVP submitted successfully!',
      data: newEntry[0]
    });

  } catch (error) {
    console.error("Database Error:", error);
    if (error.code === '23505') {
      return res.status(400).json({ message: 'This email is already registered.' });
    }
    return res.status(500).json({ message: 'Failed to save RSVP details.' });
  }
};