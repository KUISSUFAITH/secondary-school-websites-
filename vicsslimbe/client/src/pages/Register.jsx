<<<<<<< HEAD
import React from "react";

=======
>>>>>>> e325eda987966aeb53dded17298822d91643f81d
function Register() {
  return (
    <section className="page-card">
      <h1>Register</h1>
      <form className="form-grid form-compact">
        <label>
          Name
<<<<<<< HEAD
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
=======
          <input type="text" name="name" placeholder="Full name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Password" />
>>>>>>> e325eda987966aeb53dded17298822d91643f81d
        </label>
        <button type="button">Create Account</button>
      </form>
    </section>
  );
}

export default Register;
