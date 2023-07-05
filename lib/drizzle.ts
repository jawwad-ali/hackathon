import { pgTable, serial, varchar, integer } from 'drizzle-orm/pg-core';

import { drizzle } from 'drizzle-orm/node-postgres';

import { InferModel } from 'drizzle-orm';

import { sql } from '@vercel/postgres'

export const cartTable = pgTable("cartable", { 
    id: serial("id").primaryKey(),
    prod_id: varchar("prod_id").notNull(),
    user_id: varchar("user_id").notNull(),
    quantity: integer('quantity').notNull()
});

export type Todo = InferModel<typeof cartTable>;
export type NewTodo = InferModel<typeof cartTable, "insert">; // insert type

export const db = drizzle(sql); 