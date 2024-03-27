import "../styles/Form.css";
import PersonalDetails from "./form-sections/PersonalDetails";

export default function Form({ handleNameChange }) {
  return (
    <div className="formFill">
      <PersonalDetails handleNameChange={handleNameChange} />
    </div>
  );
}
