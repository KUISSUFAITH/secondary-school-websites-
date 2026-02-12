import React from "react";

function Apply() {
  return (
    <section className="page-card">
      <h1>Apply</h1>
      <form className="form-grid">
        <label>
          Full Name
          <input type="text" name="fullName" />
        </label>
        <label>
          Date of Birth
          <input type="date" name="dateOfBirth" />
        </label>
        <label>
          Parent Name
          <input type="text" name="parentName" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" />
        </label>
        <label>
          Program
          <select name="program" defaultValue="">
            <option value="" disabled>
              Select Program
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
