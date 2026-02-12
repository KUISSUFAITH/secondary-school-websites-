function Apply() {
  return (
    <section className="page-card">
      <h1>Apply</h1>
      <form className="form-grid">
        <label>
          Full Name
          <input type="text" name="fullName" placeholder="Student full name" />
        </label>
        <label>
          Date of Birth
          <input type="date" name="dateOfBirth" />
        </label>
        <label>
          Parent/Guardian Name
          <input type="text" name="parentName" placeholder="Parent or guardian name" />
        </label>
        <label>
          Phone Number
          <input type="tel" name="phone" placeholder="Phone number" />
        </label>
        <label>
          Program
          <select name="program" defaultValue="">
            <option value="" disabled>
              Select a program
            </option>
            <option value="science">Science</option>
            <option value="arts">Arts</option>
            <option value="commercial">Commercial</option>
          </select>
        </label>
        <button type="button">Submit Application</button>
      </form>
    </section>
  );
}

export default Apply;
