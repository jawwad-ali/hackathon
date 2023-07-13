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