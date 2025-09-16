import { Children, useState } from "react";
import "../styles/General.css";
import { saveInput, validityChecker, verifyInputs } from "../assets/functions";

export default function General({ person, setPerson }) {
  const [status, setStatus] = useState("edit");

  if (status === "edit") {
    return (
      <div id="general-input">
        <h1>General Information: </h1>
        <form action="">
          <p>
            <span className="required-asterisk">*</span> Designates a required
            field
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
              onChange={(event) =>
                setPerson({ ...person, title: event.target.value })
              }
              placeholder="ex: Full Stack Developer"
            />
          </label>
          <label id="description-input-label">
            Description:
            <textarea
              type="text"
              value={person.description}
              onChange={(event) =>
                setPerson({ ...person, description: event.target.value })
              }
              placeholder="3-5 sentence summary that highlights your most relevant skills, experience, and career goals for the specific job"
            />
          </label>
          <label id="skills-input-label">
            Skills:
            <input
              type="text"
              id="skills-input"
              value={person.skills.join(", ")}
              onChange={(event) =>
                setPerson({ ...person, skills: event.target.value.split(", ") })
              }
              placeholder="Comma space entries; ex: a, b, c"
            />
          </label>
          <button
            id="submit-general-button"
            onClick={() => verifyInputs("general", setStatus)}
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div id="general-output">
        {person.name.length > 0 && (
          <h1 className="name-output">{person.name}</h1>
        )}
        {person.title.length > 0 && (
          <p className="title-output">{person.title}</p>
        )}
        {(person.email.length > 0 || person.phone.length > 0) && (
          <div className="phone-email-output">
            {person.phone.length > 0 && (
              <span>
                <span className="phone-keyword">Phone:</span> (
                {person.phone.slice(0, 3)}){person.phone.slice(3, 6)}-
                {person.phone.slice(6)}
              </span>
            )}
            {person.phone.length > 0 && person.email.length > 0 && (
              <span> </span>
            )}
            {person.email.length > 0 && (
              <span>
                <span className="email-keyword">Email:</span> {person.email}
              </span>
            )}
          </div>
        )}
        {person.location.length > 0 && (
          <p className="person-location-output">{person.location}</p>
        )}
        {person.description.length > 0 ? (
          <>
            <h2 className="description-output-title">Description: </h2>
            <p className="person-description-output">{person.description}</p>
          </>
        ) : null}
        {person.skills.length > 0 ? (
          <>
            <h2 className="skills-output-title">Skills:</h2>
            <ul className="skills-output-ul">
              {person.skills.map((skill, index) => (
                <li key={index} className="skill-li">
                  {skill}
                </li>
              ))}
            </ul>
          </>
        ) : null}
        <button
          onClick={() => setStatus("edit")}
          type="button"
          className="edit-button"
        >
          Edit
        </button>
      </div>
    );
  }
}
