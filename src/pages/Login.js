import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
          <img src="/images/typewriter_stairs.png" alt="Typewriter Stairs" className="login-image" />
      </div>
      <div className="login-right">
        <h2>Log In</h2>
        <p>
          Don't have an account? <a href="/SignUp">Sign Up!</a>
        </p>
        <form className="login-form">
            <div className="login-form-group">
              <label>Please enter your username or email</label>
              <input type="text" placeholder="E.g., JDoe or john.doe@example.com" />
            </div>
            <div className="login-form-group">
              <label>Please enter password</label>
              <input type="password" placeholder="xxxxxx" />
            </div>
          <button type="submit" className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;