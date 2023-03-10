import "../styles/globals.css";
import "../styles/styles.scss";

//Next
import { Fragment } from "react";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";

// //Google fonts
// import { Inter } from "@next/font/google";
// import { Quicksand } from "@next/font/google";
// import { Heebo } from "@next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// const heebo = Heebo({
//   subsets: ["latin"],
//   variable: "--font-heebo",
// });

// const quicksand = Quicksand({
//   subsets: ["latin"],
//   variable: "--font-quicksand",
// });

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
