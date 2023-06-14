import { cookies } from 'next/headers'

import { v4 } from "uuid";

import { db, cartTable } from './../../../lib/drizzle';

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const CartProducts = await db.select().from(cartTable);
        return NextResponse.json(CartProducts);
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "SomeThing went wrong" });
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

    // const setCookies = cookies()

    // const uid = v4();
    // if ('user_id' in cookies() === null) {
    //     setCookies.set('user_id', uid);
    // }

    try {
        if (body.prod_id) {
            const res = await db.insert(cartTable).values(
                { quantity: body.quantity, user_id: cookies().get('user_id')?.value as string, prod_id: body.prod_id }).returning();

            console.log('ROUTE RES', res)
            // return NextResponse.json({ 'data added': res })
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