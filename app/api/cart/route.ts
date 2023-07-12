import { cookies } from 'next/headers'

import { v4 } from "uuid"; 

import { db, cartTable } from './../../../lib/drizzle';

import { NextRequest, NextResponse } from "next/server";
import { eq } from 'drizzle-orm';

export async function GET() { 
    try { 
        // @ts-ignore
        const CartProducts = await db.select().from(cartTable)
        .where(eq(cartTable.user_id , cookies().get("user_id")?.value as string))

        return NextResponse.json(CartProducts); 
    } catch (err) { 
        console.log(err)
        return NextResponse.json({ message: err });
    }
}
 
export async function POST(request: NextRequest) {
    const body = await request.json()
    const uid = v4();

    const setCookies = cookies();
    cookies().get("user_id");

    if (!cookies().get("user_id")) {
        setCookies.set("user_id", uid);
    }

    try {
        if (body.prod_id) {
            const res = await db.insert(cartTable).values(
                { quantity: body.quantity, user_id: cookies().get('user_id')?.value as string, prod_id: body.prod_id }).returning();
        }
        return NextResponse.json('data added')
    }
    catch (err) {
        if (body.prod_id) {
            return NextResponse.json({ 'data added': err })
        }
        return NextResponse.json({ 'data added': err })
    }
}

// DELETE
// export async function DELETE(req: NextRequest) {
//     console.log('APIreq',req)
//     const { prod_id } = await req.json();
//     try {
//         console.log('id on api', prod_id);
     
//         const deletedProduct = await db 
//           .delete(cartTable)
//           .where(eq(cartTable.prod_id, prod_id))
//           .returning(); 
    
//         return NextResponse.json({ 'data delete': deletedProduct });
//       } catch (err) {
//         return NextResponse.json({ 'Error': err });
//       }
// }