import React, { useState, useContext } from "react";
import { FetchRequest } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import jwtDecode from "jwt-decode";
import { Form } from "../Styled"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(stateContext);

  return (
    <div>
      
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          FetchRequest("/login", "POST", { email, password }).then((data) => {
            if (data.error) {
              // Add Alert
              dispatch({type: "setError", error:data.error})
              return;
            }
            dispatch({
              type: "setTokenAndUser",
              token: `Bearer ${data.token}`
            });
            dispatch({type: "setMessage", message: "You have logged in successfully!"})
            dispatch({type: "setError", error: ""})
          });
        }}
      >
        <h1>LOG IN</h1>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
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
