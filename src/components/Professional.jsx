import { useState } from "react";
import { verifyInputs, addProfession } from "../assets/functions";
import { ProfessionalInput } from "./ProfessionalInput";
import { ProfessionalOutput } from "./ProfessionalOutput";

export default function Professional({ person, setPerson }) {
  const [status, setStatus] = useState("edit");

  if (status === "edit") {
    return (
      <div id="professional-input">
        <h1>Professional Experience:</h1>
        {/* //render a ProfessionalInput component for each person.professional object */}
        {person.professional.length > 0 &&
          person.professional.map((profession, index) => (
            <div key={index} className="professional-input">
              <ProfessionalInput
                person={person}
                setPerson={setPerson}
                index={index}
              />
              <hr className="professional-instance-hr"></hr>
            </div>
          ))}
        {/* no professional experience/objects */}
        {person.professional.length === 0 && (
          <p>No professional experience objects exist!</p>
        )}
        {/* //add button //submit button} */}
        <button
          type="button"
          onClick={() => addProfession(person, setPerson)}
          id="add-professional-button"
        >
          Add Another Professional Experience
        </button>
        <button
          id="submit-professional-button"
          type="button"
          onClick={() => {
            verifyInputs("professional", setStatus);
          }}
        >
          Submit Professional Experience
        </button>
      </div>
    );
  } else {
    //submit mode
    return (
      <section id="professional-output">
        {person.professional.length === 0 && (
          <h1 className="no-profession">Experience</h1>
        )}
        {person.professional.length > 0 && (
          <h1 className="has-profession">Experience</h1>
        )}
        {/* // if person has professional objects, render their values */}
        {person.professional.length > 0 &&
          person.professional.map((profession, index) => (
            <ProfessionalOutput person={person} index={index} key={index} />
          ))}
        {/* if person has no professional objects, remind them  */}
        {person.professional.length === 0 && (
          <p className="no-profession">
            No professional experience created so far
          </p>
        )}
        <button
          className="edit-button"
          id="professional-edit-button"
          onClick={() => setStatus("edit")}
        >
          Edit
        </button>
      </section>
    );
  }
}
