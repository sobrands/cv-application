import { useState } from "react";
import "../../styles/Modal.css";
import { RxCaretDown } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa";
import EducationForm from "./EducationForm";

export default function EducationModal({ experiences, setExperiences }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFill, setIsFill] = useState(false);
  const [formId, setFormId] = useState(0);

  function toggleExpand() {
    setIsOpen(!isOpen);
  }

  function toggleFill(e) {
    e.preventDefault();
    setFormId(0);
    setIsFill(!isFill);
  }

  function showForm(key) {
    setFormId(key);
    setIsFill(!isFill);
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
            formId === 0 ? (
              <EducationForm
                experiences={experiences}
                setExperiences={setExperiences}
                toggleFill={toggleFill}
              />
            ) : (
              <EducationForm
                id={formId}
                experiences={experiences}
                setExperiences={setExperiences}
                toggleFill={toggleFill}
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
                <button onClick={toggleFill}>+ Education</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
