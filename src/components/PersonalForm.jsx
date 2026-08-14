function PersonalForm({ cv, setCv }) {
  function handleChange(e) {
    const { name, value } = e.target;

    setCv({
      ...cv,
      personal: {
        ...cv.personal,
        [name]: value
      }
    });
  }

  return (
    <div>
      <h2>Personal Information</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={cv.personal.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={cv.personal.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={cv.personal.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={cv.personal.location}
        onChange={handleChange}
      />

      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn"
        value={cv.personal.linkedin}
        onChange={handleChange}
      />

      <input
        type="text"
        name="github"
        placeholder="GitHub"
        value={cv.personal.github}
        onChange={handleChange}
      />
    </div>
  );
}

export default PersonalForm;