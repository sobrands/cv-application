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
  const [experiences, setExperiences] = useState([]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  }

  return (
    <>
      <main>
        <Form
          handleInputChange={handleInputChange}
          experiences={experiences}
          setExperiences={setExperiences}
        />
        <Preview personalInfo={personalInfo} />
      </main>
    </>
  );
}

export default App;
