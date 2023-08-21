import { buffer } from "micro";

// import { NextApiRequest } from "next";
// import { NextResponse } from "next/server";

// import Stripe from "stripe";

// const key = processs.env.STRIPE_SECRET_KEY;
// const stripe = new Stripe(key, {
//   apiVersion: "2022-11-15",
// });

// // const endpoint = process.env['STRIPE_SIGNING_SECRET'] || ""
// const endpoint = 'whsec_3c100ff31e7605f3a23b3eb790bd6ea2297d16be30a8ef7859de7e9790177674'

// export async function fullfillOrder(session: any) {
//     console.log("FullFilling the Order", session)
// }

// export async function POST(req: NextApiRequest) {

//     const requestBuffer = await buffer(req)
//     const sig = req.headers['stripe-signature'] as any
//     const payload = requestBuffer.toString()

//     let event;
//     try {
//         event = stripe.webhooks.constructEvent(payload, endpoint, sig);
//     } catch (error) {
//         console.log('ERROR', error);
//     }

//     if (event?.type === 'checkout.session.completed') {
//         const session = event.data.object;
//         console.log('session', session)
//         // await stripe.customers.list(session?.id)
//         //     .then((customer: any) => console.log("event customer =>", customer))
//         //     .catch((err: any) => console.log(err.message))

//         // return fullfillOrder(session)
//         // .then(() => res.status(200))
//         // .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`))

//         try {
//             const response = fullfillOrder(session)
//             console.log("Order FullFillment Result <==>", response)
//             return NextResponse.json(response)
//         }
//         catch (err) {
//             console.error("Order FullFillment Error <==> ", err)
//             return NextResponse.json(err)
//         }
//     }
//     return event
//     // return NextResponse.json(event)
// }

// export const routeConfig = {
//     api: {
//         bodyParser: false,
//         externalResolver: true,
//     }
// }

// // Working Fine
// // const requestBuffer = req.text()
// // const sig = req.headers.get("stripe-signature") as string | string[]

// export async function POST(req) {
//   const requestBuffer = await buffer(req);
//   const sig = req.headers["stripe-signature"];
//   const payload = requestBuffer.toString();

//   let event;
//   try {
//     event = stripe.webhooks.constructEvent(payload, endpoint, sig);
//   } catch (error) {
//     console.log("ERROR", error);
//   }

//   if (event?.type === "checkout.session.completed") {
//     const session = event.data.object;

//     console.log("session", event.data.object);

//     await stripe.customers
//       .list(session?.id)
//       .then((customer) => console.log("event customer =>", customer))
//       .catch((err) => console.log(err.message));

//     // return fullfillOrder(session)
//     // .then(() => res.status(200))
//     // .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`))

//     try {
//       const response = fullfillOrder(session);
//       console.log("Order FullFillment Result <==>", response);
//       return response;
//     } catch (err) {
//       console.error("Order FullFillment Error <==> ", err);
//       return err;
//     }
//   }
//   return event;
// }

// export const routeConfig = {
//   api: {
//     bodyParser: false,
//     externalResolver: true,
//   },
// };