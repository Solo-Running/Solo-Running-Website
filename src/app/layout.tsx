import type { Metadata } from "next";
import {Instrument_Sans} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"]
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Solo Running",
  description: "Run, Walk, GPS Tracker",
  icons: {
    icon: [
      {
        url: '/favicon.ico', // Path to your favicon.ico
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${instrumentSans.variable} antialiased bg-black`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
