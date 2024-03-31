import { useState } from "react";
import "../../styles/Modal.css";
import { RxCaretDown } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa";
import EducationForm from "./EducationForm";
import { v4 as uuidv4 } from "uuid";

export default function EducationModal({
  experiences,
  setExperiences,
  tempExperiences,
  setTempExperiences,
  toggleTemp,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFill, setIsFill] = useState(false);
  const [formId, setFormId] = useState(0);

  function toggleExpand() {
    setIsOpen(!isOpen);
  }

  function toggleFill(e) {
    e.preventDefault();
    setIsFill(!isFill);
  }

  function addForm(e) {
    e.preventDefault();
    setIsFill(!isFill);
    toggleTemp();
    const key = uuidv4();
    setTempExperiences([
      ...tempExperiences,
      {
        id: key,
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        isSaved: false,
      },
    ]);
    setFormId(key);
  }

  function showForm(key) {
    setFormId(key);
    setIsFill(!isFill);
    toggleTemp();
  }

  return (
    <div className="formSection">
      <div className="title">
        <div className="titleName">
          <FaGraduationCap className="titleLogo" />
          <h1>Education</h1>
        </div>
        <button className={isOpen ? "open" : ""} onClick={toggleExpand}>
          <RxCaretDown />
        </button>
      </div>
      {isOpen && (
        <div className={isOpen ? "open" : ""}>
          {isFill ? (
            formId === 0 ? null : (
              <EducationForm
                id={formId}
                experiences={experiences}
                setExperiences={setExperiences}
                tempExperiences={tempExperiences}
                setTempExperiences={setTempExperiences}
                toggleFill={toggleFill}
                toggleTemp={toggleTemp}
              />
            )
          ) : (
            <>
              <div className="experiences">
                {experiences.map((experience) => (
                  <button
                    key={experience.id}
                    onClick={() => showForm(experience.id)}
                  >
                    <p>{experience.school}</p>
                    <img src="" />
                  </button>
                ))}
              </div>
              <div className="add">
                <button onClick={addForm}>+ Education</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
