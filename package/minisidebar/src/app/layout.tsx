import React from "react";
import { Providers } from "@/store/providers";
import MyApp from "./app";
import "./global.css";
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "Flexy Main Demo",
  description: "Flexy Main kit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTopLoader color="#03C9D7" />
        <Providers>
          <MyApp>{children}</MyApp>
        </Providers>
      </body>
    </html>
  );
}
