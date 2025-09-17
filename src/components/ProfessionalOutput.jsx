import "../styles/ProfessionalOutput.css";

export function ProfessionalOutput({ person, index }) {
  return (
    <section id={`professional-output-${index}`}>
      <h3>{person.professional[index].companyName}</h3>
      <span>
        {person.professional[index].startDate.split("-")[1]}/
        {person.professional[index].startDate.split("-")[2]}/
        {person.professional[index].startDate.split("-")[0]}
        to{" "}
        {person.professional[index].endDate
          ? `${person.professional[index].endDate.split("-")[1]}/${person.professional[index].endDate.split("-")[2]}/${person.professional[index].endDate.split("-")[0]}`
          : "Present"}
      </span>
      <p>{person.professional[index].positionHeld}</p>
      <ul>
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
    </section>
  );
}

//elements are missing classes/ids and styling in the style file
