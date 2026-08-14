function CVPreview({ cv }) {
  return (
    <div>
      <h1>{cv.personal.name}</h1>

      <p>
        {cv.personal.email} | {cv.personal.phone} |{" "}
        {cv.personal.location}
      </p>

      <p>
        LinkedIn: {cv.personal.linkedin}
      </p>

      <p>
        GitHub: {cv.personal.github}
      </p>
    </div>
  );
}

export default CVPreview;