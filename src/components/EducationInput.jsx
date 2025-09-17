import "../styles/EducationInput.css";
import {
  changeArrayObjectValue,
  validityChecker,
} from "../assets/functions.js";

function EducationInput({ person, setPerson, index }) {
  return (
    <div className="education-input-instance">
      <form action="">
        <p>
          <span className="required-asterisk">*</span> Designates a required
          field
        </p>
        <label className="institution-input-label">
          <span>
            Institution/Course Name<span className="required-asterisk">*</span>:
          </span>
          <input
            value={person.education[index].institutionName}
            required
            id={`education-institution-name-input-${index}`}
            onChange={(event) => {
              changeArrayObjectValue(
                "education",
                "institutionName",
                event.target.value,
                person,
                setPerson,
                index,
              );
              validityChecker(
                document.querySelector(
                  `#education-institution-name-input-${index}`,
                ),
                "You need to enter text",
                `education-institution-input-error-${index}`,
              );
            }}
          />
        </label>

        <label className="degree-input-label">
          <span>
            Title of degree/course<span className="required-asterisk">*</span>:
          </span>
          <input
            value={person.education[index].courseTitle}
            id={`education-course-title-input-${index}`}
            required
            onChange={(event) => {
              changeArrayObjectValue(
                "education",
                "courseTitle",
                event.target.value,
                person,
                setPerson,
                index,
              );
              validityChecker(
                document.querySelector(
                  `#education-course-title-input-${index}`,
                ),
                "You need to enter text",
                `education-course-title-input-error-${index}`,
              );
            }}
            type="string"
          />
        </label>

        <label className="start-date-input-label">
          <span>
            Date Attended/Studied Start
            <span className="required-asterisk">*</span>:
          </span>
          <input
            type="date"
            id={`education-start-date-input-${index}`}
            required
            value={person.education[index].startDate}
            onChange={(event) => {
              changeArrayObjectValue(
                "education",
                "startDate",
                event.target.value,
                person,
                setPerson,
                index,
              );
              validityChecker(
                document.querySelector(`#education-start-date-input-${index}`),
                "You need to enter a start date",
                `education-start-date-input-error-${index}`,
              );
            }}
          />
        </label>

        <label className="end-date-input-label">
          Date Attended/Studied End: (If attending leave blank)
          <input
            type="date"
            value={person.education[index].endDate}
            onChange={(event) =>
              changeArrayObjectValue(
                "education",
                "endDate",
                event.target.value,
                person,
                setPerson,
                index,
              )
            }
          />
        </label>

        <button
          className="delete-education-button"
          type="button"
          onClick={() => {
            let newPerson = { ...person };
            newPerson.education = newPerson.education.filter(
              (education, eduIndex) => eduIndex !== index,
            );
            setPerson({ ...newPerson });
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
}

export { EducationInput };
