import React, { useEffect, useState } from "react";
import { checkValidation } from "./form-validator";

export default function Signup() {
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
  );
}
