import "../styles/Form.css";
import EducationModal from "./form-sections/EducationModal";
import PersonalDetails from "./form-sections/PersonalDetails";

export default function Form({
  handleInputChange,
  experiences,
  setExperiences,
}) {
  return (
    <div className="formFill">
      <PersonalDetails handleInputChange={handleInputChange} />
      <EducationModal
        experiences={experiences}
        setExperiences={setExperiences}
      />
    </div>
  );
}
