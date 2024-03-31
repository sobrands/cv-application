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

  const [experiences, setExperiences] = useState([]);
  const [tempExperiences, setTempExperiences] = useState([]);
  const [showTemp, setShowTemp] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  }

  function toggleTempEdu() {
    setShowTempEdu(!showTempEdu);
  }

  function toggleTemp() {
    setShowTemp(!showTemp);
  }

  return (
    <>
      <main>
        <Form
          handleInputChange={handleInputChange}
          eduExperiences={eduExperiences}
          setEduExperiences={setEduExperiences}
          tempEduExperiences={tempEduExperiences}
          setTempEduExperiences={setTempEduExperiences}
          toggleTempEdu={toggleTempEdu}
          experiences={experiences}
          setExperiences={setExperiences}
          tempExperiences={tempExperiences}
          setTempExperiences={setTempExperiences}
          toggleTemp={toggleTemp}
        />
        <Preview
          personalInfo={personalInfo}
          showTempEdu={showTempEdu}
          eduExperiences={eduExperiences}
          tempEduExperiences={tempEduExperiences}
          experiences={experiences}
          tempExperiences={tempExperiences}
          showTemp={showTemp}
        />
      </main>
    </>
  );
}

export default App;
