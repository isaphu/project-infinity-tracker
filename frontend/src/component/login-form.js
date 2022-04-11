import React, { useEffect, useState } from "react";
import { checkValidation } from "./form-validator";

export default function Login({ setIsLogin }) {
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

  useEffect(() => {
    const errors = checkValidation(isClicked, inputValues, validation);
    if (errors) setValidation(errors);
  }, [inputValues, isClicked]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="#" className="login" onSubmit={handleSubmit}>
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
      <div className="field btn">
        <div className="btn-layer"></div>
        <input
          type="submit"
          value="Login"
          onClick={() => {
            setIsClicked(true);
          }}
        />
      </div>
      <div className="signup-link" onClick={() => setIsLogin(false)}>
        Not a member? <a>Sign Up now</a>
      </div>
    </form>
  );
}
