import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Monty Hall game",
  description: "A game base on a famous tv host show",
  icons: {
    icon: "./icons-star.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}</body>
    </html>
  );
}
