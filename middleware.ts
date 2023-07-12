import { authMiddleware } from "@clerk/nextjs";
// import { NextRequest, NextResponse } from "next/server";

import { pathToRegexp } from "path-to-regexp"

const regexp = pathToRegexp("/category/:female");

export default authMiddleware({
  publicRoutes: ["/", regexp],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],

};



// const csp = ` script-src 'nonce-${nonce}' 'unsafe-eval' script-src-elem 'self'; `;

// const csp = ` script-src 'nonce-${nonce}' 'unsafe-eval' script-src-elem 'self';`;

// const csp = ` default-src 'self';
// script-src 'self' 'unsafe-eval'; 
// style-src 'self' https://stripe.com;
// `

// export function middleware(request: NextRequest) {
//   const nonce = crypto.randomUUID();

//   const csp = `script-src 'nonce-${nonce}' 'unsafe-eval' ;`;

//   // Clone the request headers
//   const requestHeaders = new Headers(request.headers);

//   // Set the CSP header so that Next.js can read it and generate tags with the nonce
//   requestHeaders.set('content-security-policy', csp);

//   // Create new response
//   const response = NextResponse.next({
//     request: {
//       // New request headers
//       headers: requestHeaders
//     }
//   });

//   // Also set the CSP header in the response so that it is outputted to the browser
//   response.headers.set('content-security-policy', csp);

//   return response;
// }