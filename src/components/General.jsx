import { Children, useState } from "react";
import "../styles/General.css";
import { GeneralInput } from "./GeneralInput";

export default function General({ person, setPerson }) {
  const [status, setStatus] = useState("edit");

  if (status === "edit") {
    return (
      <div id="general-input">
        <h1>General Information: </h1>
        <GeneralInput
          person={person}
          setPerson={setPerson}
          status={status}
          setStatus={setStatus}
        />
      </div>
    );
  } else {
    return (
      <div id="general-output">
        {person.name.length > 0 && (
          <h1 className="name-output">{person.name}</h1>
        )}
        {person.title.length > 0 && (
          <h3 className="title-output">{person.title}</h3>
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
            <p>{person.description}</p>
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
