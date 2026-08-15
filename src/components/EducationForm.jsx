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

      <p>Number of entries: {cv.education.length}</p>

      <button onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
}

export default EducationForm;