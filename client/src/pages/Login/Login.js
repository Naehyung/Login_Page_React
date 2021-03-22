import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginMain">
      <div className="loginBody">
        <h1>LOGIN</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <p>Forgot password?</p>
        <p><Link to = "/account">Create an account</Link></p>
      </div>
    </div>
  );
}

export default Login;
