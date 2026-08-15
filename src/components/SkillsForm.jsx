import { useState } from "react";

function SkillsForm({ cv, setCv }) {
  const [skill, setSkill] = useState("");

  // Add a new skill
  function addSkill() {
    if (skill.trim() === "") {
      return;
    }

    setCv({
      ...cv,
      skills: [...cv.skills, skill.trim()],
    });

    setSkill("");
  }

  // Remove a skill
  function removeSkill(index) {
    const updatedSkills = cv.skills.filter(
      (_, i) => i !== index
    );

    setCv({
      ...cv,
      skills: updatedSkills,
    });
  }

  return (
    <div>
      <h2>Skills</h2>

      <input
        type="text"
        placeholder="Enter a skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button onClick={addSkill}>
        Add Skill
      </button>

      <div>
        {cv.skills.map((skill, index) => (
          <div key={index}>
            <span>{skill}</span>

            <button
              onClick={() => removeSkill(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsForm;