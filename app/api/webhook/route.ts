// import { buffer } from "micro"
// import { /*NextApiRequest,*/ NextApiRequest, NextApiResponse } from "next";
// // import { headers } from "next/headers";
// import { /*NextRequest,*/ NextResponse } from "next/server";

// const endpoint = process.env['STRIPE_SIGNING_SECRET']

// const stripe = require('stripe')(process.env['STRIPE_SECRET_KEY'])

// async function fullfillOrder(session: any) {
//     console.log("FullFilling the Order", session)
// }

// export async function POST(req: NextApiRequest, res: NextApiResponse) {

//     // const text = await req.text();
//     // const headersList = headers();
//     // const stripeSignature = headersList.get("stripe-Signature");

//     const requestBuffer = await buffer(req)
//     const payload = requestBuffer.toString()
//     const sig = req.headers['stripe-signature']

//     let event;
//     try {
//         // event = stripe?.Webhook.construct_event(text, endpoint, stripeSignature)
//         event = stripe?.Webhook.construct_event(payload, endpoint, sig)
//         console.log('event', event)
//     } catch (error) {
//         console.log('ERROR', error)
//         return res.json(error)
//     }

//     if (event.type === 'checkout.session.completed') {
//         const session = event.data.object;
//         console.log("Payment Completed <==>", session)

//         try {
//             const res = fullfillOrder(session)
//             console.log("Order FullFillment Result <==>", res)
//             return NextResponse.json(res)
//         }
//         catch (err) {
//             console.error("Order FullFillment Error <==> ", err)
//             return NextResponse.json(err)
//         }
//     }
// }

// export const routeConfig = {
//     api: {
//         bodyParser: false,
//         externalResolver: true,
//     }
// }

// export async function GET() {
//     console.log('Getting it from Webhook')
//     return NextResponse.json({ message: "Getting it from Webhook" })
// }