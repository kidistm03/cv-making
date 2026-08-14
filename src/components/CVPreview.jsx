function CVPreview({ cv }) {
  return (
    <div className="cv">

      <div className="cv-header">
        <h1>{cv.personal.name || "Your Name"}</h1>

        <p>
          {cv.personal.email || "email@example.com"} |
          {" "}
          {cv.personal.phone || "Phone"} |
          {" "}
          {cv.personal.location || "Location"}
        </p>

        <p>
          {cv.personal.linkedin && `LinkedIn: ${cv.personal.linkedin}`}
          {" "}
          {cv.personal.github && `GitHub: ${cv.personal.github}`}
        </p>
      </div>

      <hr />

      <section>
        <h2>Education</h2>
        <p>Your education will appear here.</p>
      </section>

      <hr />

      <section>
        <h2>Experience</h2>
        <p>Your experience will appear here.</p>
      </section>

      <hr />

      <section>
        <h2>Skills</h2>
        <p>Your skills will appear here.</p>
      </section>

    </div>
  );
}

export default CVPreview;