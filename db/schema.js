import { pgTable, uuid, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const rsvps = pgTable('rsvps', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  tableCompanion: text('table_companion'),
  dietary: varchar('dietary', { length: 100 }).notNull(),
  liquor: text('liquor'),
  children: varchar('children', { length: 50 }),
  brunch: varchar('brunch', { length: 50 }).notNull(),
  tshirtSize: varchar('tshirt_size', { length: 10 }),
  // --- ADDED COLUMNS ---
  paymentStatus: varchar('payment_status', { length: 20 }).default('pending'), // 'pending' or 'success'
  paymentId: varchar('payment_id', { length: 255 }), 
  createdAt: timestamp('created_at').defaultNow(),
});