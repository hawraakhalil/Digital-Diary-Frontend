import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="left-section"></div>
      <div className="right-section">
        <h1>Create new Account</h1>
        <p>
          Already Registered? <a href="#">Login</a>
        </p>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Please enter your name</label>
            <input type="text" id="name" placeholder="Jiara Martins" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Please enter Email</label>
            <input type="email" id="email" placeholder="hello@reallygreatsite.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Please enter password</label>
            <input type="password" id="password" placeholder="*****" />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Please enter date of birth</label>
            <input type="date" id="dob" />
          </div>
          <button type="submit" className="signup-button">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
