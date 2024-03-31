import "./App.css";
import Form from "./components/Form";
import Preview from "./components/Preview";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    number: "",
    address: "",
  });
  const [eduExperiences, setEduExperiences] = useState([]);
  const [tempEduExperiences, setTempEduExperiences] = useState([]);
  const [showTempEdu, setShowTempEdu] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  }

  function toggleTempEdu() {
    setShowTempEdu(!showTempEdu);
  }

  return (
    <>
      <main>
        <Form
          handleInputChange={handleInputChange}
          experiences={eduExperiences}
          setExperiences={setEduExperiences}
          tempExperiences={tempEduExperiences}
          setTempExperiences={setTempEduExperiences}
          toggleTemp={toggleTempEdu}
        />
        <Preview
          personalInfo={personalInfo}
          showTempEdu={showTempEdu}
          eduExperiences={eduExperiences}
          tempEduExperiences={tempEduExperiences}
        />
      </main>
    </>
  );
}

export default App;
