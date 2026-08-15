function EducationForm({ cv, setCv }) {
  return (
    <div>
      <h2>Education</h2>

      <p>No education added yet.</p>

      <button>Add Education</button>
    </div>
  );
}
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
export default EducationForm;
