import "../styles/Form.css";
import EducationModal from "./form-sections/EducationModal";
import PersonalDetails from "./form-sections/PersonalDetails";

export default function Form({
  handleInputChange,
  experiences,
  setExperiences,
  tempExperiences,
  setTempExperiences,
  toggleTemp,
}) {
  return (
    <div className="formFill">
      <PersonalDetails handleInputChange={handleInputChange} />
      <EducationModal
        experiences={experiences}
        setExperiences={setExperiences}
        tempExperiences={tempExperiences}
        setTempExperiences={setTempExperiences}
        toggleTemp={toggleTemp}
      />
    </div>
  );
}
