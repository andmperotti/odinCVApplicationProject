import "../styles/ProfessionalInput.css";
import {
  changeArrayObjectValue,
  validityChecker,
  changeResponsibility,
  deleteResponsibility,
  deleteExperience,
  addResponsibility,
} from "../assets/functions.js";

function ProfessionalInput({ person, setPerson, index }) {
  return (
    <section
      id={`professional-input-${index}`}
      className="professional-input-instance"
    >
      <form className="professional-input-instance-form">
        <span>
          <label>
            <span>
              Company Name<span className="required-asterisk">*</span>:
            </span>
            <input
              value={person.professional[index].companyName}
              required
              id={`professional-input-company-name-${index}`}
              onChange={(event) => {
                changeArrayObjectValue(
                  "professional",
                  "companyName",
                  event.target.value,
                  person,
                  setPerson,
                  index,
                );
                validityChecker(
                  document.querySelector(
                    `#professional-input-company-name-${index}`,
                  ),
                  "Requires input",
                  `professional-company-name-input-error-${index}`,
                );
              }}
            ></input>
          </label>
        </span>

        <span>
          <label>
            <span>
              Position Held<span className="required-asterisk">*</span>:
            </span>
            <input
              value={person.professional[index].positionHeld}
              required
              id={`professional-input-position-held-${index}`}
              onChange={(event) => {
                changeArrayObjectValue(
                  "professional",
                  "positionHeld",
                  event.target.value,
                  person,
                  setPerson,
                  index,
                );
                validityChecker(
                  document.querySelector(
                    `#professional-input-position-held-${index}`,
                  ),
                  "Requires input",
                  `professional-position-held-input-error-${index}`,
                );
              }}
            ></input>
          </label>
        </span>

        <span>
          <label>
            <span>
              Start Date<span className="required-asterisk">*</span>:
            </span>
            <input
              value={person.professional[index].startDate}
              required
              type="month"
              id={`professional-input-start-date-${index}`}
              onChange={(event) => {
                changeArrayObjectValue(
                  "professional",
                  "startDate",
                  event.target.value,
                  person,
                  setPerson,
                  index,
                );
                validityChecker(
                  document.querySelector(
                    `#professional-input-start-date-${index}`,
                  ),
                  "Requires input",
                  `professional-start-date-error-${index}`,
                );
              }}
            ></input>
          </label>
        </span>

        <span>
          <label>
            End Date:
            <input
              value={person.professional[index].endDate}
              type="month"
              id={`professional-input-end-date-${index}`}
              onChange={(event) => {
                changeArrayObjectValue(
                  "professional",
                  "endDate",
                  event.target.value,
                  person,
                  setPerson,
                  index,
                );
                validityChecker(
                  document.querySelector(
                    `#professional-input-end-date-${index}`,
                  ),
                  "Requires input",
                  `professional-end-date-error-${index}`,
                );
              }}
            ></input>
          </label>
        </span>
        <p>If position is current leave blank</p>

        <h3>Responsibilities:</h3>
        {person.professional[index].responsibilities.length === 0 && (
          <p className="no-responsibilities">No Responsibilities exist.</p>
        )}
        {person.professional[index].responsibilities.map(
          (responsibility, responsibilityIndex) => (
            <span key={`${index}-${responsibilityIndex}`}>
              <label>
                Responsibility:
                <input
                  value={responsibility}
                  required
                  id={`professional-input-responsibility-${index}-${responsibilityIndex}`}
                  onChange={(event) => {
                    changeResponsibility(
                      index,
                      responsibilityIndex,
                      event.target.value,
                      person,
                      setPerson,
                    );
                    validityChecker(
                      document.querySelector(
                        `#professional-input-responsibility-${index}-${responsibilityIndex}`,
                      ),
                      "Requires input",
                      `professional-responsibility-error-${index}-${responsibilityIndex}`,
                    );
                  }}
                ></input>
                <button
                  type="button"
                  onClick={() =>
                    deleteResponsibility(
                      index,
                      responsibilityIndex,
                      person,
                      setPerson,
                    )
                  }
                >
                  Delete
                </button>
              </label>
            </span>
          ),
        )}

        <button
          className="add-responsibility-button"
          onClick={() => addResponsibility(person, setPerson, index)}
          type="button"
        >
          Add Another Responsibility
        </button>
        <button
          className="delete-professional-experience-button"
          type="button"
          onClick={() => deleteExperience(index, person, setPerson)}
        >
          Delete Experience
        </button>
      </form>
    </section>
  );
}

export { ProfessionalInput };
