import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Urbn Herb",
  description: "Fresh vegetarian food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar-custom:dark scrollbar-custom:dark-thumb scrollbar-custom:dark-hover`}
      >
      <Navbar />
        {children}
      </body>
    </html>
  );
}
