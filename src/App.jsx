import "./App.css";
import Form from "./components/Form";
import Preview from "./components/Preview";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  function handleInputChange(e) {
    switch (e.target.id) {
      case "fullName":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phoneNumber":
        setNumber(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
    }
  }

  return (
    <>
      <main>
        <Form handleInputChange={handleInputChange} />
        <Preview name={name} email={email} number={number} address={address} />
      </main>
    </>
  );
}

export default App;
