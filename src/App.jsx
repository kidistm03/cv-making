import { useState } from "react";
import PersonalForm from "./components/PersonalForm";

function App() {
  const [cv, setCv] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: ""
    },

    education: [],

    experience: [],

    skills: []
  });

  return (
    <div>
      <h1>CV Builder</h1>

      <PersonalForm
        cv={cv}
        setCv={setCv}
      />
    </div>
  );
}

export default App;