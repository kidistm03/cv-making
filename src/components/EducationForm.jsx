function EducationForm({ cv, setCv }) {
  // Add a new education entry
  function addEducation() {
    const newEducation = {
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
    };

    setCv({
      ...cv,
      education: [...cv.education, newEducation],
    });
  }

  // Remove an education entry
  function removeEducation(index) {
    const updatedEducation = cv.education.filter(
      (_, i) => i !== index
    );

    setCv({
      ...cv,
      education: updatedEducation,
    });
  }

  // Update an education entry
  function handleChange(index, e) {
    const { name, value } = e.target;

    const updatedEducation = [...cv.education];

    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };

    setCv({
      ...cv,
      education: updatedEducation,
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
            name="school"
            placeholder="School"
            value={education.school}
            onChange={(e) => handleChange(index, e)}
          />

          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={education.degree}
            onChange={(e) => handleChange(index, e)}
          />

          <input
            type="text"
            name="field"
            placeholder="Field of Study"
            value={education.field}
            onChange={(e) => handleChange(index, e)}
          />

          <input
            type="text"
            name="startDate"
            placeholder="Start Date"
            value={education.startDate}
            onChange={(e) => handleChange(index, e)}
          />

          <input
            type="text"
            name="endDate"
            placeholder="End Date"
            value={education.endDate}
            onChange={(e) => handleChange(index, e)}
          />

          <button onClick={() => removeEducation(index)}>
            Remove
          </button>
        </div>
      ))}

      <button onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
}

export default EducationForm;