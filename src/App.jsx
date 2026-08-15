import { useState } from "react";
import html2pdf from "html2pdf.js";
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
  function loadExample() {
    setCv({
      personal: {
        name: "Kidist Meseret",
        email: "kidistmeseret1@gmail.com",
        phone: "0911223344",
        location: "Addis Ababa, Ethiopia",
        linkedin: "linkedin.com/in/kidist",
        github: "https://github.com/kidistm03",
      },

      education: [
        {
          school: "Addis Ababa University",
          degree: "BSc",
          field: "Software Engineering",
          startDate: "2023",
          endDate: "2027",
        },
      ],

      experience: [
        {
          company: "Tech Company",
          role: "Frontend Developer",
          startDate: "2025",
          endDate: "2026",
          description: "Built responsive web applications using React.",
        },
      ],

      skills: ["JavaScript", "React", "HTML", "CSS", "Git"],
    });
  }
  function downloadPDF() {
  const element = document.querySelector(".cv");

  const options = {
    margin: 10,
    filename: "my-cv.pdf",

    image: {
      type: "jpeg",
      quality: 0.98,
    },

    html2canvas: {
      scale: 2,
    },

    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
  };

  html2pdf()
    .set(options)
    .from(element)
    .save();
}
  return (
    <div className="app">
      <h1>CV Builder</h1>

      <button onClick={() => setIsPreview(!isPreview)}>
        {isPreview ? "Edit CV" : "Preview CV"}
      </button>

      <button onClick={clearAll}>Clear All</button>
      <button onClick={loadExample}>Load Example</button>
      <button onClick={downloadPDF}>Download PDF</button>

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
