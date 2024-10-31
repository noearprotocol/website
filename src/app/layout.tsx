import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const monaSans = localFont({
  src: "../fonts/Mona-Sans-Regular.woff",
  variable: "--font-mona-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "$NoEAR - Ears Abstracted",
  description: "noear-324.meme-cooking.near",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
