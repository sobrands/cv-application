import { useState } from "react";
import "../../styles/Modal.css";
import { RxCaretDown } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa";
import EducationForm from "./EducationForm";

export default function ExpandableModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFill, setIsFill] = useState(false);

  function toggleExpand() {
    setIsOpen(!isOpen);
  }

  function toggleFill(e) {
    e.preventDefault();
    setIsFill(!isFill);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
            <EducationForm
              handleSubmit={handleSubmit}
              toggleFill={toggleFill}
            />
          ) : (
            <div className="add">
              <button onClick={toggleFill}>+ Education</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
