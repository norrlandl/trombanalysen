import { useEffect, useRef } from "react";
// import classes from "./auth-form.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function AuthForm() {
  const { data, status } = useSession();

  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");

  const router = useRouter();

  async function submitSignIn(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const result = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (!result.error) {
      console.log("inloggning lyckades!");
      router.replace("/admin");
    }
  }

  return (
    <section>
      {/* <h1>Status: {status}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <form onSubmit={submitSignIn}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={passwordInputRef} />
        </div>
        <div>
          {data && <button onClick={signOut}>Log out</button>}
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
