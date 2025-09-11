import "../styles/EducationInput.css";

function EducationInput({ person, setPerson, index }) {
  function addOrChangeEducation(property, value) {
    //add/replace property: value pair, as long as there is an object at that index then you can add or change the property value pair
    let newPerson = { ...person };
    newPerson.education[index][property] = value;
    setPerson(newPerson);
  }

  return (
    <div className="education-input-instance">
      <label className="institution-input-label">
        Institution/Course Name:
        <input
          value={person.education[index].institutionName}
          onChange={(event) =>
            addOrChangeEducation("institutionName", event.target.value)
          }
        />
      </label>

      <label className="degree-input-label">
        Title of degree/course:
        <input
          value={person.education[index].courseName}
          onChange={(event) =>
            addOrChangeEducation("courseTitle", event.target.value)
          }
          type="string"
        />
      </label>

      <label className="start-date-input-label">
        Date Attended/Studied Start:
        <input
          type="date"
          value={person.education[index].dateStarted}
          onChange={(event) =>
            addOrChangeEducation("startDate", event.target.value)
          }
        />
      </label>

      <label className="end-date-input-label">
        Date Attended/Studied End:
        <input
          type="date"
          value={person.education[index].dateEnded}
          onChange={(event) =>
            addOrChangeEducation("endDate", event.target.value)
          }
        />
      </label>
      <hr></hr>
    </div>
  );
}

export { EducationInput };
