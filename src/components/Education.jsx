import { useState } from "react";
import "../styles/Education.css";
import { EducationInput } from "./EducationInput";
import { verifyInputs } from "../assets/functions";

export default function Education({ person, setPerson }) {
  const [status, setStatus] = useState("edit");

  if (status === "edit") {
    return (
      //generate first education object, there's one by default
      //if there are more education objects generate a component for each

      <div id="education-input">
        <h1>Education:</h1>
        {person.education.length === 0 && <p>No education objects created</p>}
        {person.education.length > 0 && (
          <div key={0}>
            <EducationInput person={person} setPerson={setPerson} index={0} />
          </div>
        )}
        {person.education.length > 1 &&
          person.education.slice(1).map((element, index) => (
            <div key={index + 1}>
              <hr></hr>
              <EducationInput
                person={person}
                setPerson={setPerson}
                index={index + 1}
              />
            </div>
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
          id="submit-education-button"
          onClick={() => verifyInputs("education", setStatus)}
        >
          Submit
        </button>
      </div>
    );
  } else {
    return (
      <div id="education-output">
        {person.education.length === 0 && (
          <h1 className="no-education">Education</h1>
        )}
        {person.education.length > 0 && (
          <h1 className="has-education">Education</h1>
        )}
        {person.education.length > 0 && (
          <section className="educations-container">
            {person.education.map((education, index) => (
              <section className="education-item" key={index}>
                <section className="institution-info">
                  <h2 className="education-name-output">
                    {education.institutionName}
                  </h2>
                  <span className="education-dates-studied">
                    <span>
                      {education.startDate.split("-")[1]}/
                      {education.startDate.split("-")[2]}/
                      {education.startDate.split("-")[0]}{" "}
                      <span className="date-to"> to </span>
                      {education.endDate
                        ? `${education.endDate.split("-")[1]}/${education.endDate.split("-")[2]}/${education.endDate.split("-")[0]}`
                        : "Present"}
                    </span>
                  </span>
                </section>
                <p className="education-title">{education.courseTitle}</p>
              </section>
            ))}
          </section>
        )}
        <button
          className="edit-button"
          onClick={() => setStatus("edit")}
          id="education-edit-button"
        >
          Edit
        </button>
      </div>
    );
  }
}
