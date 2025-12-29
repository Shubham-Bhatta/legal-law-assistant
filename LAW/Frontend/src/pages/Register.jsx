import "../styles/Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    console.log("Register:", { firstName, lastName, email, password });

    // For now: redirect back to login after "register"
    navigate("/login", { replace: true });
  }

  return (
    <div className="register-page">
      {/* Outside card: top-left brand */}
      <div className="page-brand">LAW ASSISTANT</div>

      <div className="register-center">
        <form className="register-card" onSubmit={onSubmit}>
          <h1 className="register-title">REGISTER</h1>

          {/* First + Last name horizontal */}
          <div className="field-row">
            <div className="field">
              <input
                id="firstName"
                type="text"
                className="register-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder=" "
                autoComplete="given-name"
              />
              <label className="floating-label" htmlFor="firstName">
                First name
              </label>
            </div>

            <div className="field">
              <input
                id="lastName"
                type="text"
                className="register-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder=" "
                autoComplete="family-name"
              />
              <label className="floating-label" htmlFor="lastName">
                Last name
              </label>
            </div>
          </div>

          <div className="field">
            <input
              id="email"
              type="email"
              className="register-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              autoComplete="email"
            />
            <label className="floating-label" htmlFor="email">
              Email
            </label>
          </div>

          <div className="field">
            <input
              id="password"
              type="password"
              className="register-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              autoComplete="new-password"
            />
            <label className="floating-label" htmlFor="password">
              Password
            </label>
          </div>

          <div className="field">
            <input
              id="confirm"
              type="password"
              className="register-input"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder=" "
              autoComplete="new-password"
            />
            <label className="floating-label" htmlFor="confirm">
              Confirm password
            </label>
          </div>

          <button className="register-btn" type="submit">
            Create account
          </button>

          <div className="register-footer">
            <span className="register-footer-text">Already have an account?</span>
            <Link className="register-link" to="/login">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
