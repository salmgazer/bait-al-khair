import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Big_Shoulders_Display } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import "./font.css";


const bigShoulders = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-big-shoulders',
  display: 'swap',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bait Al-Khair",
  description: "The Home of Goodness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bigShoulders.variable}`}>
      <body
         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-BM4VR6Q52K" />
    </html>
  );
}


