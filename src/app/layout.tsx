import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";
import "@uploadthing/react/styles.css";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Generate by a person who wanted to learn dfrom a T3 tutorial.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geist.variable} flex flex-col gap-4`}>
        <body>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
