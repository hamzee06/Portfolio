import React from "react";
import Intro from "./Components/Intro.jsx";
import SkillCard from "./Components/SkillCard.jsx";
import FullStackProject from "./Components/FullStackProject.jsx";
import ContactSection from "./Components/ContactSection.jsx";

function App() {
  return (
    <div className="App">
      <Intro />
      <SkillCard />
      <FullStackProject />
      <ContactSection />
    </div>
  );
}

export default App;
