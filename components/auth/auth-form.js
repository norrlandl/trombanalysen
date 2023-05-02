import { useState, useRef } from "react";
// import classes from "./auth-form.module.css";
import { signIn } from "next-auth/react";

function AuthForm() {
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");

  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // New

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      console.log(result);
    } catch (error) {
      console.log(error);
    }

    //*** */

    // const result = await signIn("credentials", {
    //   redirect: false,
    //   email: enteredEmail,
    //   password: enteredPassword,
    // });

    // console.log(result);

    // if (!result.error) {
    //   // set auth state
    // }
  }

  return (
    <section>
      <form>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div>
          <button>Login</button>
          <button type="button" onClick={switchAuthModeHandler}></button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
