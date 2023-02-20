import Link from "next/link";
import { Fragment } from "react";

export default function Admin() {
  return (
    <Fragment>
      <h1>Admin panel</h1>
      <h2>tråk-tabellen</h2>
      <ul>
        <li>
          <Link href="/admin/hello-hey">Next js</Link>
        </li>
        <li>
          <Link href="/admin/react">React</Link>
        </li>
      </ul>
    </Fragment>
  );
}
