import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from './schema.js'; // MUST have .js
import 'dotenv/config';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    // This allows the connection to Neon's secure endpoints
    rejectUnauthorized: false 
  }
});

export const db = drizzle(pool, { schema });