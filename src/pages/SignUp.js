import React from 'react';
import './SignUp.css';

function SignUp() {
    return (
      <div className="signup-container">
        <div className="signup-left">
            <img src="/images/guy_with_pencil.png" alt="Typewriter Stairs" className="signup-image" />
        </div>
        <div className="signup-right">
          <h2>Create new Account</h2>
          <p>
            Already Registered? <a href="/login">Login</a>
          </p>
          <form className="signup-form">
            <div className="form-row">
              <div className="form-group">
                <label>Please enter first name</label>
                <input type="text" placeholder="E.g., John" />
              </div>
              <div className="form-group">
                <label>Please enter date of birth</label>
                <input type="date" placeholder="MM/DD/YYYY" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Please enter last name</label>
                <input type="text" placeholder="E.g., Doe" />
              </div>
              <div className="form-group">
                <label>Please enter Email</label>
                <input type="email" placeholder="E.g., john.doe@example.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Please enter username</label>
                <input type="text" placeholder="Choose a unique username" />
              </div>
              <div className="form-group">
                <label>Please enter password</label>
                <input type="password" placeholder="Create a strong password" />
              </div>
            </div>
            <div className="form-row">
            <div className="form-group">
                <label>Please enter gender</label>
                <select>
                <option value="" disabled selected>
                    Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label>Please confirm password</label>
                <input type="password" placeholder="Re-enter your password" />
            </div>
            </div>
            <button type="submit" className="signup-button">SIGN UP</button>
          </form>
        </div>
      </div>
    );
  }

export default SignUp;