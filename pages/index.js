import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Start from "@/components/Start";

function HomePage() {
  return (
    <Fragment>
      <Navbar />
      {/* <Head></Head> */}
      <Start />
    </Fragment>
  );
}

export default HomePage;
