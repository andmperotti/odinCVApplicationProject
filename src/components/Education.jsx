import { useState } from "react";
import "../styles/Education.css";
import { EducationInput } from "./EducationInput";

export default function Education() {
  const [status, setStatus] = useState("edit");

  if (status === "edit") {
    //if person.education.length===0 render one instance with no values
    //else if person.education.length>0 render an EducationInput instance for each object in that array
    return (
      <div id="education-input">
        <h1>Education:</h1>
        <EducationInput />
        <button
          id="add-education-component"
          //add onClick method to generate another Educationinput component, guessing it would add object to person.education array with empty values
        >
          Add Another
        </button>
        <button onClick={() => setStatus("submit")}>Submit</button>
        {/* maybe check for inputs when submit is clicked so handfuls of empty
        education objects aren't added? */}
      </div>
    );
  } else {
    return (
      <div id="education-output">
        {/* //if education.person.length>0: */}
        <h1>Education</h1>
        {/* //generate output for each object in array */}
        {/* //name of school/course  */}
        {/* //title of degree/course taken  */}
        {/* //dates attended/studied */}
        <button onClick={() => setStatus("edit")} id="education-edit-button">
          Edit
        </button>
      </div>
    );
  }
}
