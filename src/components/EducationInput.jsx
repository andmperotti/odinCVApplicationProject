import { useState } from "react";
import "../styles/EducationInput.css";

function EducationInput() {
  return (
    <div class="education-input-instance">
      <label class="institution-input-label">
        Institution/Course Name:
        <input />
      </label>

      <label class="degree-input-label">
        Title of degree/course:
        <input />
      </label>

      <label class="start-date-input-label">
        Date Attended/Studied Start:
        <input type="date" />
      </label>

      <label class="end-date-input-label">
        Date Attended/Studied End:
        <input type="date" />
      </label>
    </div>
  );
}

export { EducationInput };
