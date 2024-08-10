import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lakers - The official site of the National Basketball Association",
  description: "The official site of the National Basketball Association. Follow the action on NBA scores, schedules, stats, news, Team and Player news.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
