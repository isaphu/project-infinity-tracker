import React, { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="authContainer">
      <div className="wrapper">
        <div className="title-text">
          {isLogin ? (
            <div className="title login">
              <img
                src={require("../../media/icons/icons8-infinity-90-BW.png")}
                width="40px"
              />
            </div>
          ) : (
            <div className="title signup">
              Create an InfinityTracker™ account
            </div>
          )}
        </div>
        <div className="auth-form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" checked={isLogin} />
            <input type="radio" name="slide" id="signup" checked={!isLogin} />
            <label
              for="login"
              className="slide login"
              onClick={() => setIsLogin(true)}
            >
              Login
            </label>
            <label
              for="signup"
              className="slide signup"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            {isLogin ? (
              <form action="#" className="login">
                <div className="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link" onClick={() => setIsLogin(false)}>
                  Not a member? <a>Sign Up now</a>
                </div>
              </form>
            ) : (
              <form action="#" className="signup">
                <div className="field">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="field">
                  <input type="text" placeholder="Surename" required />
                </div>
                <div className="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    required
                  />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Signup" />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
