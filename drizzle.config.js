import 'dotenv/config';

export default {
  // Path to your schema file (ensure this extension is correct)
  schema: './db/schema.js', 
  out: './drizzle',
  // In newer Drizzle versions, use 'dialect' instead of 'driver'
  dialect: 'postgresql', 
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};