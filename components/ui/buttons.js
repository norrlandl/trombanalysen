import Link from "next/link";
import classes from "./buttons.module.scss";

export function ButtonPrimary(props) {
  return (
    <Link href={props.link} legacyBehavior>
      <a className={`${classes.btn} ${classes.btn__primary}`}>
        {props.children}
      </a>
    </Link>
  );
}

export function ButtonSecondary(props) {
  return (
    <Link href={props.link} legacyBehavior>
      <a className={`${classes.btn} ${classes.btn__secondary}`}>
        {props.children}
      </a>
    </Link>
  );
}

export function ButtonTertiary(props) {
  return (
    <Link href={props.link} legacyBehavior>
      <a className={`${classes.btn} ${classes.btn__tertiary}`}>
        {props.children}
      </a>
    </Link>
  );
}
