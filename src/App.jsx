import "./App.css";
import Form from "./components/Form";
import Preview from "./components/Preview";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <main>
        <Form handleNameChange={handleNameChange} />
        <Preview name={name} />
      </main>
    </>
  );
}

export default App;
