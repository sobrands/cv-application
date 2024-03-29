import "./App.css";
import Form from "./components/Form";
import Preview from "./components/Preview";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  function handleInputChange(e) {
    switch (e.target.id) {
      case "fullName":
        setPersonalInfo({ ...personalInfo, name: e.target.value });
        break;
      case "email":
        setPersonalInfo({ ...personalInfo, email: e.target.value });
        break;
      case "phoneNumber":
        setPersonalInfo({ ...personalInfo, number: e.target.value });
        break;
      case "address":
        setPersonalInfo({ ...personalInfo, address: e.target.value });
        break;
    }
  }

  return (
    <>
      <main>
        <Form handleInputChange={handleInputChange} />
        <Preview personalInfo={personalInfo} />
      </main>
    </>
  );
}

export default App;
