import { useState } from "react";
import "../styles/General.css";

export default function General({ person, setPerson }) {
  const [status, setStatus] = useState("edit");

  if (status === "edit") {
    return (
      <div className="general-input">
        <h1>General Information: </h1>
        <form action="">
          <p>* Designates an optional field</p>
          <label id="name-input-label">
            Name:
            <input
              type="text"
              value={person.name}
              onChange={(event) =>
                setPerson({
                  ...person,
                  name: event.target.value,
                })
              }
              placeholder="ex: Chris Toms"
            />
          </label>
          <label id="email-input-label">
            Email:
            <input
              type="text"
              value={person.email}
              onChange={(event) =>
                setPerson({ ...person, email: event.target.value })
              }
              placeholder="ex: chrisT@test.com"
            />
          </label>
          <label id="phone-input-label">
            Phone:
            <input
              type="text"
              value={person.phone}
              onChange={(event) =>
                setPerson({ ...person, phone: event.target.value })
              }
              placeholder="ex: 1234567890"
            />
          </label>
          <label id="location-input-label">
            Location*:
            <input
              type="text"
              value={person.location}
              onChange={(event) =>
                setPerson({ ...person, location: event.target.value })
              }
              placeholder="city, state"
            />
          </label>
          <label id="professional-title-input-label">
            Professional Title*:
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
            Description*:
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
            Skills*:
            <input
              type="text"
              id="skills-input"
              value={person.skills.join(", ")}
              onChange={(event) =>
                setPerson({ ...person, skills: event.target.value.split(", ") })
              }
            />
            <span class="skills-disclaimer">
              Please comma space separate entries (ex: strong communication,
              critical thinking, teamwork, adaptability)
            </span>
          </label>
          <button
            id="submit-general"
            onClick={() => setStatus("submit")}
            type="button"
          >
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="general-output">
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
