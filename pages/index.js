import { Fragment, useState } from "react";
import Navbar from "@/components/layout/navbar";
import Start from "@/pages/login/index";
import Footer from "@/components/Footer";
import { signOut, useSession } from "next-auth/react";

function HomePage() {
  const { data, status } = useSession();

  console.log(data, status);

  return (
    <Fragment>
      {/* <Navbar /> */}
      <Start />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
