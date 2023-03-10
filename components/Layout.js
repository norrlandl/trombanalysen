import Footer from "./Footer";
import Navbar from "./Navbar";

//Google fonts
import { Inter } from "@next/font/google";
import { Quicksand } from "@next/font/google";
import { Heebo } from "@next/font/google";

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

export default function Layout({ children }) {
  return (
    <div
      className={`${inter.variable} ${quicksand.variable} ${heebo.variable}`}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
