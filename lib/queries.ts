'use server'
import { sql } from "@vercel/postgres";

// Query to Del items from Database
export const handleDelete = async (id: string) => {
    const del = await sql`DELETE FROM cartable WHERE prod_id = ${id}`;
    console.log("del", del);
};