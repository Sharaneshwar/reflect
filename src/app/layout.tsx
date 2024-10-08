import type { Metadata } from "next";
import { Figtree } from "next/font/google"
import "./globals.css";

const figtree = Figtree({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={figtree.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
