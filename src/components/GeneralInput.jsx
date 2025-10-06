import {
  saveInput,
  validityChecker,
  verifyInputs,
  addSkill,
  createNewPerson,
} from "../assets/functions";
import { GeneralInputSkill } from "./GeneralInputSkills";
import "../styles/GeneralInput.css";

function GeneralInput({ person, setPerson, setStatus }) {
  return (
    <form action="" id="general-input-form">
      <p>
        <span className="required-asterisk">*</span> Designates a required field
      </p>
      <label id="name-input-label">
        <span>
          Name<span className="required-asterisk">*</span>:
        </span>
        <input
          type="text"
          value={person.name}
          onChange={(event) => {
            saveInput(event, "name", person, setPerson);
            validityChecker(
              document.querySelector("#name-input-label input"),
              "Field requires text",
              "general-name-input-error",
            );
          }}
          placeholder="ex: Chris Toms"
          required
        />
      </label>
      <label id="email-input-label">
        <span>
          Email<span className="required-asterisk">*</span>:
        </span>
        <input
          type="email"
          value={person.email}
          onChange={(event) => {
            saveInput(event, "email", person, setPerson);
            validityChecker(
              document.querySelector("#email-input-label input"),
              "Field requires valid email address",
              "general-email-input-error",
            );
          }}
          placeholder="ex: chrisT@test.com"
          required
          pattern="\w+@{1}[a-zA-Z]+[.][a-zA-Z]+"
        />
      </label>
      <label id="phone-input-label">
        <span>
          Phone<span className="required-asterisk">*</span>:
        </span>
        <input
          type="text"
          value={person.phone}
          onChange={(event) => {
            saveInput(event, "phone", person, setPerson);
            validityChecker(
              document.querySelector("#phone-input-label input"),
              "Field requires 10 digits",
              "general-phone-input-error",
            );
          }}
          placeholder="ex: 1234567890"
          required
          pattern="\d{10}"
        />
      </label>
      <label id="location-input-label">
        <span>
          Location<span className="required-asterisk">*</span>:
        </span>
        <input
          type="text"
          value={person.location}
          onChange={(event) => {
            saveInput(event, "location", person, setPerson);
            validityChecker(
              document.querySelector("#location-input-label input"),
              "Field requires text entry",
              "general-location-input-error",
            );
          }}
          placeholder="city, state"
          required
        />
      </label>
      <label id="professional-title-input-label">
        Professional Title:
        <input
          type="text"
          value={person.title}
          onChange={(event) => {
            let newPerson = createNewPerson(person);
            newPerson.title = event.target.value;
            setPerson(newPerson);
          }}
          placeholder="ex: Full Stack Developer"
        />
      </label>
      <label id="description-input-label">
        Description:
        <textarea
          type="text"
          value={person.description}
          onChange={(event) => {
            let newPerson = createNewPerson(person);
            newPerson.description = event.target.value;
            setPerson(newPerson);
          }}
          placeholder="3-5 sentence summary that highlights your most relevant skills, experience, and career goals for the specific job"
        />
      </label>
      <h2>Other Skills:</h2>
      {person.skills.length === 0 && <p>No skills have been created</p>}
      {person.skills.length > 0 &&
        person.skills.map((skill, index) => (
          <GeneralInputSkill
            person={person}
            setPerson={setPerson}
            skill={skill}
            key={index}
            index={index}
          />
        ))}
      <button
        type="button"
        id="add-skill-button"
        onClick={() => addSkill(person, setPerson)}
      >
        Add Another Skill
      </button>
      <button
        id="submit-general-button"
        onClick={() => verifyInputs("general", setStatus)}
        type="button"
      >
        Submit General
      </button>
    </form>
  );
}

export { GeneralInput };
