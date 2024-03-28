import { useState } from "react";
import "../../styles/Modal.css";
import { RxCaretDown } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa";

export default function ExpandableModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFill, setIsFill] = useState(false);

  function toggleExpand() {
    setIsOpen(!isOpen);
  }

  function toggleFill() {
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
            <div className="fields">
              <div className="details">
                <label htmlFor="school">School</label>
                <input
                  id="school"
                  name="school"
                  placeholder="Enter school / university"
                ></input>
              </div>
              <div className="details">
                <label htmlFor="degree">Degree</label>
                <input
                  id="degree"
                  name="degree"
                  placeholder="Enter degree / field of study"
                ></input>
              </div>
              <div className="details">
                <label htmlFor="startDate">Start Date</label>
                <input
                  id="startDate"
                  name="startDate"
                  placeholder="Enter start date"
                ></input>
              </div>
              <div className="details">
                <label htmlFor="endDate">End Date</label>
                <input
                  id="endDate"
                  name="endDate"
                  placeholder="Enter end date"
                ></input>
              </div>
              <div className="buttons">
                <button className="delete">Delete</button>
                <div className="edit">
                  <button className="cancel" onClick={toggleFill}>
                    Cancel
                  </button>
                  <button className="save">Save</button>
                </div>
              </div>
            </div>
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
