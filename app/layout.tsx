import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "../styles/component.module.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merry - Where happiness meet high scores",
  description: "Where happiness meet high scores",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
