import { useState } from "react";

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
    </div>
  );
}

export default App;