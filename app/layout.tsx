import { ReactNode } from "react";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Footer from "./components/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis"
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-dvh flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
