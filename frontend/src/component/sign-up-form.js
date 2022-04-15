import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("")

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  useEffect(() => {
    const errors = checkValidation(isClicked, inputValues, validation);
    if (errors) setValidation(errors);
  }, [inputValues, isClicked]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/v1/users";
      const {inputValues:res} = await axios.post(url, inputValues);
      //nvaigate ไปไหน 
      navigate("/login")
      console.log(res.message);
    } catch (error) {
      if(
        error.response && 
        error.response.status >= 400 && 
        error.response.status <= 500
        ) {
          setError(error.response.inputValues.message)
        }
    }
  };

  return (
    <form action="#" className="signup" onSubmit={handleSubmit}>
      <div className="field">
        {/* {validation.firstName && <p>{validation.firstName}</p>} */}
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          onChange={(e) => handleChange(e)}
          value={inputValues.firstName}
        />
      </div>
      <div className="field">
        {/* {validation.lastName && <p>{validation.lastName}</p>} */}
        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          onChange={(e) => handleChange(e)}
          value={inputValues.lastName}
        />
      </div>
      <div className="field">
        {/* {validation.email && <p>{validation.email}</p>} */}
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
        {error && <div className="error_msg">{error}</div>}
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
