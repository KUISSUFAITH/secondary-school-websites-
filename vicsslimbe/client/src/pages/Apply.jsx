<<<<<<< HEAD
import React from "react";

=======
>>>>>>> e325eda987966aeb53dded17298822d91643f81d
function Apply() {
  return (
    <section className="page-card">
      <h1>Apply</h1>
      <form className="form-grid">
        <label>
          Full Name
<<<<<<< HEAD
          <input type="text" name="fullName" />
=======
          <input type="text" name="fullName" placeholder="Student full name" />
>>>>>>> e325eda987966aeb53dded17298822d91643f81d
        </label>
        <label>
          Date of Birth
          <input type="date" name="dateOfBirth" />
        </label>
        <label>
<<<<<<< HEAD
          Parent Name
          <input type="text" name="parentName" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" />
=======
          Parent/Guardian Name
          <input type="text" name="parentName" placeholder="Parent or guardian name" />
        </label>
        <label>
          Phone Number
          <input type="tel" name="phone" placeholder="Phone number" />
>>>>>>> e325eda987966aeb53dded17298822d91643f81d
        </label>
        <label>
          Program
          <select name="program" defaultValue="">
            <option value="" disabled>
<<<<<<< HEAD
              Select Program
=======
              Select a program
>>>>>>> e325eda987966aeb53dded17298822d91643f81d
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
