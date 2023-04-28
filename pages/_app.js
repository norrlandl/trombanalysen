import "../styles/globals.css";
import "../styles/styles.scss";

//Next
import { Fragment } from "react";
import Navbar from "@/components/layout/navbar";
import Layout from "@/components/layout/layout";
// import { SessionProvider } from "next-auth/react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]";

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
