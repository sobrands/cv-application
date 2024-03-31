import "../styles/Form.css";
import EducationModal from "./form-sections/EducationModal";
import ExperienceModal from "./form-sections/ExperienceModal";
import PersonalDetails from "./form-sections/PersonalDetails";
import { useState } from "react";

export default function Form({
  handleInputChange,
  eduExperiences,
  setEduExperiences,
  tempEduExperiences,
  setTempEduExperiences,
  toggleTempEdu,
  experiences,
  setExperiences,
  tempExperiences,
  setTempExperiences,
  toggleTemp,
}) {
  const [eduOpen, setEduOpen] = useState(false);
  const [expOpen, setExpOpen] = useState(false);

  function toggleEduOpen() {
    setEduOpen(!eduOpen);
    if (expOpen) {
      setExpOpen(!expOpen);
    }
  }

  function toggleExpOpen() {
    setExpOpen(!expOpen);
    if (eduOpen) {
      setEduOpen(!eduOpen);
    }
  }

  return (
    <div className="formFill">
      <PersonalDetails handleInputChange={handleInputChange} />
      <EducationModal
        experiences={eduExperiences}
        setExperiences={setEduExperiences}
        tempExperiences={tempEduExperiences}
        setTempExperiences={setTempEduExperiences}
        toggleTemp={toggleTempEdu}
        isOpen={eduOpen}
        toggleExpand={toggleEduOpen}
      />
      <ExperienceModal
        experiences={experiences}
        setExperiences={setExperiences}
        tempExperiences={tempExperiences}
        setTempExperiences={setTempExperiences}
        toggleTemp={toggleTemp}
        isOpen={expOpen}
        toggleExpand={toggleExpOpen}
      />
    </div>
  );
}
