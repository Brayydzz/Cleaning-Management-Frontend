import React, { useState, useContext } from "react";
import { FetchRequest } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import jwtDecode from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(stateContext);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          FetchRequest("/login", "POST", { email, password }).then((data) => {
            if (data.error) {
              // Add Alert
              alert(data.error);
              return;
            }
            console.log(jwtDecode(data.token), "**********")
            dispatch({
              type: "setTokenAndUser",
              token: `Bearer ${data.token}`,
              user: jwtDecode(data.token),
            });
          });
        }}
      >
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
      </form>
    </div>
  );
};

export default Login;
