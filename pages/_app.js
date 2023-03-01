import "../styles/globals.css";
import "../styles/styles.scss";

//Google fonts
import { Inter } from "@next/font/google";
import { Quicksand } from "@next/font/google";
import { Heebo } from "@next/font/google";

//Next
import { Fragment } from "react";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${inter.variable} ${quicksand.variable} ${heebo.variable}`}
    >
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
