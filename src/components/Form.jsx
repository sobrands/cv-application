import "../styles/Form.css";
import PersonalDetails from "./form-sections/PersonalDetails";

export default function Form({ handleInputChange }) {
  return (
    <div className="formFill">
      <PersonalDetails handleInputChange={handleInputChange} />
    </div>
  );
}
