<<<<<<< HEAD
import React from "react";

=======
>>>>>>> e325eda987966aeb53dded17298822d91643f81d
function Login() {
  return (
    <section className="page-card">
      <h1>Login</h1>
      <form className="form-grid form-compact">
        <label>
          Email
<<<<<<< HEAD
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
=======
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Password" />
>>>>>>> e325eda987966aeb53dded17298822d91643f81d
        </label>
        <button type="button">Login</button>
      </form>
    </section>
  );
}

export default Login;
