import { useState, useRef } from "react";
// import classes from "./auth-form.module.css";

function AuthForm(userData) {
  console.log(userData);
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");

  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();
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
