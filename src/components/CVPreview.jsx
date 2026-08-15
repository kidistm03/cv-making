function CVPreview({ cv }) {
  return (
    <div className="cv">
      {/* Personal Information */}
      <header className="cv-header">
        <h1>{cv.personal.name || "Your Name"}</h1>

        <p>
          {cv.personal.email}
          {cv.personal.phone && ` | ${cv.personal.phone}`}
          {cv.personal.location && ` | ${cv.personal.location}`}
        </p>

        {(cv.personal.linkedin || cv.personal.github) && (
          <p>
            {cv.personal.linkedin}
            {cv.personal.linkedin && cv.personal.github && " | "}
            {cv.personal.github}
          </p>
        )}
      </header>

      {/* Education */}
      {cv.education.length > 0 && (
        <section className="cv-section">
          <h2>Education</h2>

          {cv.education.map((education, index) => (
            <div className="cv-item" key={index}>
              <div>
                <h3>{education.school}</h3>

                <p>
                  {education.degree}
                  {education.field && ` - ${education.field}`}
                </p>
              </div>

              <p className="date">
                {education.startDate} - {education.endDate}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {cv.experience.length > 0 && (
        <section className="cv-section">
          <h2>Experience</h2>

          {cv.experience.map((experience, index) => (
            <div className="cv-item" key={index}>
              <div>
                <h3>{experience.company}</h3>

                <p>{experience.role}</p>

                <p>{experience.description}</p>
              </div>

              <p className="date">
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {cv.skills.length > 0 && (
        <section className="cv-section">
          <h2>Skills</h2>

          <div className="skills-list">
            {cv.skills.map((skill, index) => (
              <span className="skill-tag" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default CVPreview;
