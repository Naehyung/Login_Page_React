import "./Account.css";
import React, { useState } from "react";
import Axios from "axios";

function Account() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {

    if(!usernameReg || !passwordReg) {
        alert("Please type username or password");
        return false;
    }

    Axios.post("http://localhost:3001/account/register", {
      username: usernameReg,
      password: passwordReg,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div className="accountMain">
      <div className="accountBody">
        <h1>CREATE AN ACCOUNT</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}>Create an account</button>
      </div>
    </div>
  );
}

export default Account;
