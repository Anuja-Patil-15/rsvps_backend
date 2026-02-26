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
  createdAt: timestamp('created_at').defaultNow(),
});