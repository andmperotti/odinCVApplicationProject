import "../styles/ProfessionalOutput.css";

export function ProfessionalOutput({ person, index }) {
  return (
    <section id={`professional-output-${index}`} class="professional-item">
      <section class="professional-name-date-item ">
        <h2>{person.professional[index].companyName}</h2>
        <span>
          {person.professional[index].startDate.split("-")[1]}/
          {person.professional[index].startDate.split("-")[0]}
          <span className="date-to"> to </span>
          {person.professional[index].endDate
            ? `${person.professional[index].endDate.split("-")[1]}/${person.professional[index].endDate.split("-")[0]}`
            : "Present"}
        </span>
      </section>
      <p class="professional-position">
        {person.professional[index].positionHeld}
      </p>
      {person.professional[index].responsibilities.length > 0 && (
        <p className="professional-responsibilities-heading">
          Responsibilities:
        </p>
      )}
      {person.professional[index].responsibilities.length > 0 && (
        <ul className="professional-responsibilities-list">
          {person.professional[index].responsibilities.length > 0 &&
            person.professional[index].responsibilities.map(
              (responsibility, responsibilityIndex) => (
                <li
                  key={`${index}-${responsibilityIndex}`}
                  id={`professional-output-${index}-responsibility-${responsibilityIndex}`}
                >
                  {responsibility}
                </li>
              ),
            )}
        </ul>
      )}
    </section>
  );
}

//elements are missing classes/ids and styling in the style file
