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

        {/* render first education element, which exists by default*/}
        {
          <EducationInput
            person={person}
            setPerson={setPerson}
            key={0}
            index={0}
          />
        }

        {/* render the rest of the education objects if the length is greater than 1, which happens when the "add another education" button is clicked and updates state*/}
        {person.education.length > 1 &&
          person.education
            .slice(1)
            .map((element, index) => (
              <EducationInput
                person={person}
                setPerson={setPerson}
                key={index}
                index={index}
              />
            ))}

        <button
          id="add-education-button"
          onClick={() => {
            let newPerson = { ...person };
            newPerson.education.push({
              institutionName: "",
              courseTitle: "",
              startDate: "",
              endDate: "",
            });
            setPerson(newPerson);
          }}
        >
          Add Another
        </button>
        <button onClick={() => setStatus("submit")}>Submit</button>
      </div>
    );
  } else {
    return (
      <div id="education-output">
        {person.education.length > 0 &&
          person.education[0].institutionName.length > 0 && <h1>Education</h1>}
        <ul className="education-list">
          {person.education.map((education, index) => (
            <li className="education-items" key={index}>
              <section className="institution-info">
                <h3 className="education-name-output">
                  {education.institutionName}
                </h3>
                <span className="education-dates-studied">
                  {education.startDate.slice(5, 7)}/
                  {education.startDate.slice(9)}/
                  {education.startDate.slice(0, 4)} to{" "}
                  {education.endDate.slice(5, 7)}/{education.endDate.slice(9)}/
                  {education.endDate.slice(0, 4)}
                </span>
              </section>
              <p className="education-title">{education.courseTitle}</p>
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
