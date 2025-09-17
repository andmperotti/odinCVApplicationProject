import { useState } from "react";
import "../styles/Professional.css";
import { verifyInputs } from "../assets/functions";
import { ProfessionalInput } from "./ProfessionalInput";

export default function Professional({ person, setPerson }) {
  const [status, setStatus] = useState("edit");

  if (status === "edit") {
    if (person.professional.length > 0) {
      return (
        <>
          <h1>Professional Experience:</h1>
          {/* //render only one instance of ProfessionalInput */}
          {person.professional.length === 1 && (
            <div key={0}>
              <ProfessionalInput person={person} setPerson={setPerson} />
            </div>
          )}
          {/* //render a ProfessionalInput component for each person.professional object */}
          {person.professional.length > 1 &&
            person.professional.map((profession, index) => (
              <div key={index}>
                <ProfessionaInput person={person} setPerson={setPerson} />
              </div>
            ))}
          {/* no professional experience/objects */}
          {person.professional.length === 0 && (
            <p>No professional experience objects exist!</p>
          )}
          {/* //add button //submit button} */}
          <button type="button">Add Another Profession</button>
          <button type="button">Submit</button>
        </>
      );
    }
  } else {
    //submit mode
    
  }
}
