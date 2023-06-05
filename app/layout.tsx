import "./globals.css";
import FlowbiteContext from "./context/FlowbiteContext";
import NavigationBar from "./components/NavigationBar";

export default function RootLayout({
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
      <body>
        <FlowbiteContext>
          <NavigationBar />
          {children} 
        </FlowbiteContext>
      </body>
    </html>
  );
}
