import React, { useEffect, useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validation, setValidation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    if (!isClicked) return;
    let errors = { ...validation };

    //first Name validation
    if (!inputValues.firstName.trim()) {
      errors.firstName = "First name is required";
    } else {
      errors.firstName = "";
    }
    //last Name validation
    if (!inputValues.lastName.trim()) {
      errors.lastName = "Last name is required";
    } else {
      errors.lastName = "";
    }

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please input a valid email address";
    } else {
      errors.email = "";
    }

    //password validation
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "longer than 6 char.";
    } else if (password.length >= 20) {
      errors.password = "shorter than 20 char.";
    } else {
      errors.password = "";
    }

    //matchPassword validation
    if (!inputValues.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (inputValues.confirmPassword !== inputValues.Password) {
      errors.confirmPassword = "Password does not match confirmation password";
    } else {
      errors.password = "";
    }

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues, isClicked]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
              htmlFor="login"
              className="slide login"
              onClick={() => setIsLogin(true)}
            >
              Login
            </label>
            <label
              htmlFor="signup"
              className="slide signup"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            {isLogin ? (
              <form action="#" className="login" onSubmit={handleSubmit}>
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
              <form action="#" className="signup" onSubmit={handleSubmit}>
                <div className="field">
                  {validation.firstName && <p>{validation.firstName}</p>}
                  <input
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.firstName}
                  />
                </div>
                <div className="field">
                  {validation.lastName && <p>{validation.lastName}</p>}
                  <input
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.lastName}
                  />
                </div>
                <div className="field">
                  {validation.email && <p>{validation.email}</p>}
                  <input
                    placeholder="Email Address"
                    type="text"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.email}
                  />
                </div>
                <div className="field">
                  {validation.password && <p>{validation.password}</p>}
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.password}
                  />
                </div>
                <div className="field">
                  <input
                    placeholder="Confirm password"
                    type="password"
                    name="confirmPassword"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.confirmPassword}
                  />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input
                    type="submit"
                    value="Signup"
                    onClick={() => {
                      setIsClicked(true);
                    }}
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
