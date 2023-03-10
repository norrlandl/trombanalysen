import { Fragment } from "react";
import Navbar from "@/components/Navbar";
import Start from "@/pages/login/index";
import Footer from "@/components/Footer";

function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <Start />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
