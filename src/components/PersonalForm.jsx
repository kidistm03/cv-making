function PersonalForm({ cv, setCv }) {
  return (
    <div>
      <h2>Personal Information</h2>

      <input
        type="text"
        placeholder="Name"
      />

      <input
        type="email"
        placeholder="Email"
      />

      <input
        type="text"
        placeholder="Phone"
      />

      <input
        type="text"
        placeholder="Location"
      />

      <input
        type="text"
        placeholder="LinkedIn"
      />

      <input
        type="text"
        placeholder="GitHub"
      />
    </div>
  );
}

export default PersonalForm;