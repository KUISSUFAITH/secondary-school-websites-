import React from "react";

function Register() {
  return (
    <section className="page-card">
      <h1>Register</h1>
      <form className="form-grid form-compact">
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="button">Create Account</button>
      </form>
    </section>
  );
}

export default Register;
