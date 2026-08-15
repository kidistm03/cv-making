function EducationForm({ cv, setCv }) {
  function addEducation() {
    const newEducation = {
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: ""
    };

    setCv({
      ...cv,
      education: [
        ...cv.education,
        newEducation
      ]
    });
  }

  return (
    <div>
      <h2>Education</h2>

      {cv.education.map((education, index) => (
        <div key={index}>

          <h3>Education {index + 1}</h3>

          <input
            type="text"
            placeholder="School"
          />

          <input
            type="text"
            placeholder="Degree"
          />

          <input
            type="text"
            placeholder="Field of Study"
          />

          <input
            type="text"
            placeholder="Start Date"
          />

          <input
            type="text"
            placeholder="End Date"
          />

        </div>
      ))}

      <button onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
}

export default EducationForm;