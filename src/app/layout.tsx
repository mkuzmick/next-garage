import type { Metadata } from "next";
import { Inter, Emilys_Candy } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const emilysCandy = Emilys_Candy({ subsets: ["latin"], weight: "400", variable: "--font-emilys-candy" });

export const metadata: Metadata = {
  title: "Next Workshop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${emilysCandy.variable}`}>{children}</body>
    </html>
  );
}
