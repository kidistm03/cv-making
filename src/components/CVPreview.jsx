function CVPreview({ cv }) {
  return (
    <div className="cv">
      <div className="cv-header">
        <h1>{cv.personal.name || "Your Name"}</h1>

        <p>
          {cv.personal.email || "email@example.com"} |{" "}
          {cv.personal.phone || "Phone"} | {cv.personal.location || "Location"}
        </p>

        <p>
          {cv.personal.linkedin && `LinkedIn: ${cv.personal.linkedin}`}{" "}
          {cv.personal.github && `GitHub: ${cv.personal.github}`}
        </p>
      </div>

      <hr />

      {cv.education.length > 0 && (
        <section>
          <h2>Education</h2>

          {cv.education.map((education, index) => (
            <div key={index}>
              <h3>{education.school}</h3>

              <p>
                {education.degree} - {education.field}
              </p>

              <p>
                {education.startDate} - {education.endDate}
              </p>
            </div>
          ))}
        </section>
      )}

      <hr />

      {cv.experience.length > 0 && (
        <section>
          <h2>Experience</h2>

          {cv.experience.map((experience, index) => (
            <div key={index}>
              <h3>{experience.company}</h3>

              <p>{experience.role}</p>

              <p>
                {experience.startDate} - {experience.endDate}
              </p>

              <p>{experience.description}</p>
            </div>
          ))}
        </section>
      )}

      <hr />

      {cv.skills.length > 0 && (
        <section>
          <h2>Skills</h2>

          <div className="skills-list">
            {cv.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
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
