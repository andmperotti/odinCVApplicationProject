// import { useState } from "react";
import "../styles/App.css";
import General from "./General.jsx";
import Education from "./Education.jsx";
import Professional from "./Professional.jsx";

function App() {
  return (
    <>
      <h1>CV Builder</h1>
      <General />
      <Education />
      <Professional />
    </>
  );
}

export default App;
