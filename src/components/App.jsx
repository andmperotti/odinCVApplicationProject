import { useState } from "react";
import "../styles/App.css";
import General from "./General.jsx";
import Education from "./Education.jsx";
import Professional from "./Professional.jsx";

function App() {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    title: "",
    description: "",
    skills: [""],
    education: [
      {
        institutionName: "",
        courseTitle: "",
        startDate: "2000-01",
        endDate: "",
      },
    ],
    professional: [
      {
        companyName: "",
        positionHeld: "",
        startDate: "2000-01",
        endDate: "",
        responsibilities: [""],
      },
    ],
  });

  return (
    <div className="App">
      <h1 id="title">CV Builder</h1>
      <General person={person} setPerson={setPerson} />
      <Education person={person} setPerson={setPerson} />
      <Professional person={person} setPerson={setPerson} />
    </div>
  );
}

export default App;
