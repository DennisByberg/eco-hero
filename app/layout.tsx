import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavBar from "./components/NavBar/NavBar";
import heroImg from "./images/Group 25.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eco Hero",
  description: "A game to save the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image className="heroImg" src={heroImg} alt="" />
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
