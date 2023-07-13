import "./globals.css";

import React from "react";

import FlowbiteContext from "./context/FlowbiteContext";

import NavigationBar from "./components/NavigationBar";

import Footer from "./components/Footer";

import { ClerkProvider } from "@clerk/nextjs";

import { Providers } from "../redux/provider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        <title>Hackathon</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Hackathon Project" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="max-w-6xl mx-auto min-h-screen">
        <ClerkProvider>
          <Providers>
            <FlowbiteContext>
                <NavigationBar />
                {children}
                <Footer />
            </FlowbiteContext>
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
