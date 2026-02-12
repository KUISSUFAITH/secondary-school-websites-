function Register() {
  return (
    <section className="page-card">
      <h1>Register</h1>
      <form className="form-grid form-compact">
        <label>
          Name
          <input type="text" name="name" placeholder="Full name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Password" />
        </label>
        <button type="button">Create Account</button>
      </form>
    </section>
  );
}

export default Register;
