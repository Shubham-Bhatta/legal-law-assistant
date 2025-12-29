import "../styles/Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log("Login:", { email, password });
  }

  return (
    <div className="login-page">
      {/* Top-left brand OUTSIDE the card */}
      <div className="page-brand">LAW ASSISTANT</div>

      {/* Centered card */}
      <div className="login-center">
        <form className="login-card" onSubmit={onSubmit}>
          <h1 className="login-title">SIGN IN</h1>

          <div className="field">
            <input
              id="email"
              type="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              placeholder=" "
            />
            <label className="floating-label" htmlFor="email">
              Email
            </label>
          </div>

          <div className="field">
            <input
              id="password"
              type="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder=" "
            />
            <label className="floating-label" htmlFor="password">
              Password
            </label>
          </div>

          <button className="login-btn" type="submit">
            Submit
          </button>

          <div className="login-footer">
            <span className="login-footer-text">New here?</span>
            <Link className="login-link" to="/register">Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
