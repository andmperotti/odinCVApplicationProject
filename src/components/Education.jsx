import { useState } from "react";
import "../styles/Education.css";
import { EducationInput } from "./EducationInput";

export default function Education({ person, setPerson }) {
  const [status, setStatus] = useState("edit");

  if (status === "edit") {
    return (
      //generate first education object, there's one by default
      //if there are more education objects generate a component for each

      <div id="education-input">
        <h1>Education:</h1>
        {
          <EducationInput
            person={person}
            setPerson={setPerson}
            key={0}
            index={0}
          />
        }
        {person.education.length > 1 &&
          person.education.slice(1).map((element, index) => (
            <>
              <hr></hr>
              <EducationInput
                person={person}
                setPerson={setPerson}
                key={index + 1}
                index={index + 1}
              />
            </>
          ))}
        <hr></hr>
        <button
          id="add-education-button"
          //Limit new educations to ten
          onClick={() => {
            if (person.education.length < 10) {
              let newPerson = { ...person };
              newPerson.education.push({
                institutionName: "",
                courseTitle: "",
                startDate: "",
                endDate: "",
              });
              setPerson(newPerson);
            } else {
              //tell the user that there are only ten educations allowed
              let educationLimitError = document.createElement("span");
              educationLimitError.id = "education-limit-error-message";
              educationLimitError.textContent =
                "You cannot have more than ten education objects";
              document
                .querySelector("#add-education-button")
                .after(educationLimitError);
              setTimeout(() => {
                educationLimitError.remove();
              }, 5000);
            }
          }}
        >
          Add Another Education
        </button>

        <button
          onClick={() => {
            //if required input fields data are acceptable, then change status
            let educationInputFields = Array.from(
              document.querySelectorAll(".education-input-instance input"),
            );
            if (
              educationInputFields.every(
                (input) => input.checkValidity() === true,
              )
            ) {
              setStatus("submit");
            } else {
              //otherwise tell the user there are problems with their input above
              educationInputFields.filter((inputEle) =>
                inputEle.checkValidity() === false
                  ? (inputEle.style.outline = "1px solid red")
                  : null,
              );
            }
          }}
        >
          Submit
        </button>
      </div>
    );
  } else {
    return (
      <div id="education-output">
        {person.education.length > 0 && <h1>Education</h1>}
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
                  {education.endDate
                    ? `${education.endDate.slice(5, 7)}/${education.endDate.slice(9)}/
                  ${education.endDate.slice(0, 4)}`
                    : "Present"}
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
