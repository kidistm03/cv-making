import { useState } from "react";

import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import SkillsForm from "./components/SkillsForm";
import CVPreview from "./components/CVPreview";

import "./App.css";

function App() {
  const [cv, setCv] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
    },

    education: [],
    experience: [],
    skills: [],
  });

  const [isPreview, setIsPreview] = useState(false);

  function clearAll() {
    setCv({
      personal: {
        name: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        github: "",
      },

      education: [],
      experience: [],
      skills: [],
    });
  }

  return (
    <div className="app">
      <h1>CV Builder</h1>

      <button onClick={() => setIsPreview(!isPreview)}>
        {isPreview ? "Edit CV" : "Preview CV"}
      </button>

      <button onClick={clearAll}>Clear All</button>

      <div className="container">
        {!isPreview && (
          <div className="form-panel">
            <PersonalForm cv={cv} setCv={setCv} />

            <EducationForm cv={cv} setCv={setCv} />

            <ExperienceForm cv={cv} setCv={setCv} />

            <SkillsForm cv={cv} setCv={setCv} />
          </div>
        )}

        <div className="preview-panel">
          <CVPreview cv={cv} />
        </div>
      </div>
    </div>
  );
}

export default App;
