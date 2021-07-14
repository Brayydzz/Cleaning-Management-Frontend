import React, { useState, useContext } from "react";
import { FetchRequest } from "../helperFunctions";
import { stateContext } from "../stateReducer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(stateContext);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          FetchRequest("/login", "POST", { email, password }).then((data) =>
          {
            if (data.error)
            {
              // Add Alert
              alert(data.error)
              return
            }
            dispatch({
              type: "setToken",
              data: `Bearer ${data.token}`,
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
