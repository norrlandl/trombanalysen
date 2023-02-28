import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Start from "@/components/start";

function HomePage() {
  return (
    <Fragment>
      {/* <Navbar />
      <Head></Head> */}
      <Start />
    </Fragment>
  );
}

export default HomePage;
