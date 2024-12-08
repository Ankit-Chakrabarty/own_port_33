import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { ReactNode } from "react"; 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ankit'sLatest",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}