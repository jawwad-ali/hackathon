import "./globals.css";
import FlowbiteContext from "./context/FlowbiteContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <html lang="en">
      <head></head> 
      <body>
        <FlowbiteContext>{children}</FlowbiteContext>
      </body>
    </html>
  );
}

// import { FC, PropsWithChildren } from "react";
// import FlowbiteContext from "./context/FlowbiteContext";
// import "./globals.css";

// const RootLayout: FC<PropsWithChildren> = function ({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <FlowbiteContext>{children}</FlowbiteContext>
//       </body>
//     </html>
//   );
// };

// export default RootLayout;