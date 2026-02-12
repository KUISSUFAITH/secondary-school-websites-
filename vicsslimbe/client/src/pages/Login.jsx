import React from "react";

function Login() {
  return (
    <section className="page-card">
      <h1>Login</h1>
      <form className="form-grid form-compact">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="button">Login</button>
      </form>
    </section>
  );
}

export default Login;
