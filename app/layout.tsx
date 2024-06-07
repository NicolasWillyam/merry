import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "../styles/component.module.css";
const inter = Inter({ subsets: ["latin"] });
import logo from "../public/logo.svg";

export const metadata: Metadata = {
  title: "Merry - Where happiness meet high scores",
  description: "Where happiness meet high scores",
  icons: {
    icon: "logo.png",
    // shortcut: "/shortcut-icon.png",
    // apple: "/apple-icon.png",
    // other: {
    //   rel: "apple-touch-icon-precomposed",
    //   url: "/apple-touch-icon-precomposed.png",
    // },
  },
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
