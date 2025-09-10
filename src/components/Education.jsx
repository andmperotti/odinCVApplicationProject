import { useState } from "react";
import "../styles/Education.css";
import { EducationInput } from "./EducationInput";

export default function Education({ person, setPerson }) {
  const [status, setStatus] = useState("edit");

  if (status === "edit") {
    //if person.education.length===0 render one instance with no values
    //else if person.education.length>0 render an EducationInput instance for each object in that array
    return (
      <div id="education-input">
        <h1>Education:</h1>
        <EducationInput person={person} setPerson={setPerson} />

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
        {person.education.length > 0 && <h1>Education</h1>}
        <ul>
          {person.education.map((education) => (
            <li>
              <h3 class="education-name-output">{/*Education name*/}</h3>
              <span class="education-dates-studied">
                {/*Dates Attended/Studied Start - End*/}
              </span>
              <p class="education-degree-title-output">
                {/*Degree/Course Title*/}
              </p>
            </li>
          ))}
        </ul>
        <button onClick={() => setStatus("edit")} id="education-edit-button">
          Edit
        </button>
      </div>
    );
  }
}
