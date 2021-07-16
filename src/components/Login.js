import React, { useState, useContext } from "react";
import { FetchRequest } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import jwtDecode from "jwt-decode";
import { Form } from "../Styled";
import validator from "validator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(stateContext);

  const setErrorMessage = (message) => {
    dispatch({ type: "setError", error: message });
  };

  const validateInputs = () => {
    if (!validator.isEmail(email)) {
      setErrorMessage("Invalid Email and Password");
      return false;
    }
    return true;
  };
  return (
    <div>
      <Form
        id="login_form"
        onSubmit={(e) =>
        {
          if (validateInputs())
          {
            e.preventDefault();
            FetchRequest("/login", "POST", { email, password }).then((data) =>
            {
              if (data.error)
              {
                // Add Alert
                dispatch({ type: "setError", error: data.error });
                return;
              }
              dispatch({
                type: "setTokenAndUser",
                token: `Bearer ${data.token}`,
              });
              dispatch({
                type: "setMessage",
                message: "You have logged in successfully!",
              });
            });
          }
        }}
      >
        <h1>LOG IN</h1>
        <input
          id="login_email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="login_password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </Form>
    </div>
  );
};

export default Login;
