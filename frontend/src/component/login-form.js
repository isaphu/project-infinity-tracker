import React, { useState } from "react";
import axios from "axios";
// import { checkValidation } from "./form-validator";

export default function Login({ setIsLogin }) {
  const [isClicked, setIsClicked] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  // const [validation, setValidation] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  // useEffect(() => {
  //   const errors = checkValidation(isClicked, inputValues, validation);
  //   if (errors) setValidation(errors);
  // }, [inputValues, isClicked]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/v1/auth";
      const {inputValues:res} = await axios.post(url, inputValues);
      //nvaigate ไปไหน 
      localStorage.setItem("token", res.data);
			window.location = "/";
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
    <form action="#" className="login" onSubmit={handleSubmit}>
      <div className="field">
        {/* {validation.email && <p>{validation.email}</p>} */}
        <input
          placeholder="Email Address"
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          value={inputValues.email}
        />
      </div>
      <div className="field">
        {/* {validation.password && <p>{validation.password}</p>} */}
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          value={inputValues.password}
        />
      </div>
      <div className="field btn">
      {error && <div className="error_msg">{error}</div>}
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
