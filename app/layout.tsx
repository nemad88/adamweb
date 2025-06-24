import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam Nemeth – Digital Solutions, Simply.",
  description:
    "Adam Nemeth – Full-stack developer, digital solutions, web and mobile apps, consulting. Contact: info@adamweb.dev.",
  keywords: [
    "Adam Nemeth",
    "Full-stack developer",
    "Web development",
    "Mobile development",
    "Digital solutions",
    "Consulting",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Adam Nemeth", url: "https://adamweb.dev" }],
  creator: "Adam Nemeth",
  openGraph: {
    title: "Adam Nemeth – Digital Solutions, Simply.",
    description:
      "Full-stack developer, digital solutions, web and mobile apps, consulting.",
    url: "https://adamweb.dev",
    siteName: "Adam Nemeth Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 400,
        height: 400,
        alt: "Adam Nemeth profile photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://adamweb.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
