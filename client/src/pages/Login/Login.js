import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Axios from "axios";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
        }      
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <div className="loginMain">
      <div className="loginBody">
        <h1>LOGIN</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
        <p>
          <Link to="/password">Forgot password?</Link>
        </p>
        <p>
          <Link to="/account">Create an account</Link>
        </p>
        <p>{loginStatus}</p>
       
      </div>
    </div>
  );
}

export default Login;
