import "../styles/EducationInput.css";

function EducationInput({ person, setPerson, index }) {
  function addOrChangeEducation(property, value) {
    let newPerson = { ...person };
    newPerson.education[index][property] = value;
    setPerson(newPerson);
  }

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
            onChange={(event) =>
              addOrChangeEducation("institutionName", event.target.value)
            }
          />
        </label>

        <label className="degree-input-label">
          <span>
            Title of degree/course<span className="required-asterisk">*</span>:
          </span>
          <input
            value={person.education[index].courseTitle}
            required
            onChange={(event) =>
              addOrChangeEducation("courseTitle", event.target.value)
            }
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
            required
            value={person.education[index].startDate}
            onChange={(event) =>
              addOrChangeEducation("startDate", event.target.value)
            }
          />
        </label>

        <label className="end-date-input-label">
          Date Attended/Studied End: (If attending leave blank)
          <input
            type="date"
            value={person.education[index].endDate}
            onChange={(event) =>
              addOrChangeEducation("endDate", event.target.value)
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
