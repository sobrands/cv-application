import { useState } from "react";
import "../../styles/Modal.css";
import { RxCaretDown } from "react-icons/rx";
import { FaBriefcase } from "react-icons/fa";
import ExperienceForm from "./ExperienceForm";
import { v4 as uuidv4 } from "uuid";

export default function EducationModal({
  experiences,
  setExperiences,
  tempExperiences,
  setTempExperiences,
  toggleTemp,
  isOpen,
  toggleExpand,
}) {
  const [isFill, setIsFill] = useState(false);
  const [formId, setFormId] = useState(0);

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
          <FaBriefcase className="titleLogo" id="briefcase" />
          <h1>Experience</h1>
        </div>
        <button className={isOpen ? "open" : ""} onClick={toggleExpand}>
          <RxCaretDown />
        </button>
      </div>
      {isOpen && (
        <div className={isOpen ? "open" : ""}>
          {isFill ? (
            formId === 0 ? null : (
              <ExperienceForm
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
                    <p>{experience.companyName}</p>
                    <img src="" />
                  </button>
                ))}
              </div>
              <div className="add">
                <button onClick={addForm}>+ Experience</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
