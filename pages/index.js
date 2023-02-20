import { Fragment } from "react";
import variables from "../styles/variables.module.scss";

function HomePage() {
  return (
    <Fragment>
      <h3 className={variables.title}>Hej SASS</h3>
    </Fragment>
  );
}

export default HomePage;
