import { validityChecker, deleteSkill, changeSkill } from "../assets/functions";

function GeneralInputSkill({ person, setPerson, skill, index }) {
  return (
    <span>
      <label>
        <span>
          Skill<span className="required-asterisk">*</span>:
        </span>{" "}
        <input
          minLength={1}
          required
          value={skill}
          id={`skill-input-${index}`}
          placeholder="example: teamwork"
          onChange={(event) => {
            changeSkill(person, setPerson, event.target.value, index);
            validityChecker(
              document.querySelector(`#skill-input-${index}`),
              "Field requires input",
              `skill-input-${index}-error`,
            );
          }}
        />
        <button
          type="button"
          onClick={() => deleteSkill(person, setPerson, index)}
        >
          Delete
        </button>
      </label>
    </span>
  );
}

export { GeneralInputSkill };
