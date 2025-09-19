function EducationOutput({ education, index }) {
  return (
    <section className="education-item" key={index}>
      <section className="institution-info">
        <h2 className="education-name-output">{education.institutionName}</h2>
        <span className="education-dates-studied">
          <span>
            {education.startDate.split("-")[1]}/
            {education.startDate.split("-")[2]}/
            {education.startDate.split("-")[0]}{" "}
            <span className="date-to"> to </span>
            {education.endDate
              ? `${education.endDate.split("-")[1]}/${education.endDate.split("-")[2]}/${education.endDate.split("-")[0]}`
              : "Present"}
          </span>
        </span>
      </section>
      <p className="education-title">{education.courseTitle}</p>
    </section>
  );
}

export { EducationOutput };
