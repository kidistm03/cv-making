function ExperienceForm({ cv, setCv }) {
  // Add a new experience
  function addExperience() {
    const newExperience = {
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    };

    setCv({
      ...cv,
      experience: [
        ...cv.experience,
        newExperience,
      ],
    });
  }

  // Remove an experience
  function removeExperience(index) {
    const updatedExperience = cv.experience.filter(
      (_, i) => i !== index
    );

    setCv({
      ...cv,
      experience: updatedExperience,
    });
  }

  // Update an experience
  function handleChange(index, e) {
    const { name, value } = e.target;

    const updatedExperience = [
      ...cv.experience,
    ];

    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };

    setCv({
      ...cv,
      experience: updatedExperience,
    });
  }

  return (
    <div>
      <h2>Work Experience</h2>

      {cv.experience.map((experience, index) => (
        <div key={index}>
          <h3>Experience {index + 1}</h3>

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={experience.company}
            onChange={(e) =>
              handleChange(index, e)
            }
          />

          <input
            type="text"
            name="role"
            placeholder="Role"
            value={experience.role}
            onChange={(e) =>
              handleChange(index, e)
            }
          />

          <input
            type="text"
            name="startDate"
            placeholder="Start Date"
            value={experience.startDate}
            onChange={(e) =>
              handleChange(index, e)
            }
          />

          <input
            type="text"
            name="endDate"
            placeholder="End Date"
            value={experience.endDate}
            onChange={(e) =>
              handleChange(index, e)
            }
          />

          <textarea
            name="description"
            placeholder="Description"
            value={experience.description}
            onChange={(e) =>
              handleChange(index, e)
            }
          ></textarea>

          <button
            onClick={() =>
              removeExperience(index)
            }
          >
            Remove
          </button>
        </div>
      ))}

      <button onClick={addExperience}>
        Add Experience
      </button>
    </div>
  );
}

export default ExperienceForm;