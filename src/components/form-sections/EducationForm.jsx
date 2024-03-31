import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function EducationForm({
  experiences,
  setExperiences,
  id,
  toggleFill,
}) {
  const [formData, setFormData] = useState(
    id !== undefined
      ? experiences.find((experience) => experience.id === id)
      : {
          id: "",
          school: "",
          degree: "",
          startDate: "",
          endDate: "",
        },
  );

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setExperiences([
      ...experiences,
      {
        id: uuidv4(),
        school: formData.school,
        degree: formData.degree,
        startDate: formData.startDate,
        endDate: formData.endDate,
      },
    ]);
    toggleFill(e);
  }

  function updateEntry(e) {
    e.preventDefault();
    const idx = experiences.findIndex((experience) => experience.id === id);
    experiences[idx] = formData;
    setExperiences(experiences);
    toggleFill(e);
  }

  function removeItem(e) {
    e.preventDefault();
    const newList = experiences.filter((experience) => experience.id !== id);
    setExperiences(newList);
    toggleFill(e);
  }

  return (
    <form onSubmit={id !== undefined ? updateEntry : handleSubmit}>
      <div className="fields">
        <div className="details">
          <label htmlFor="school">School</label>
          <input
            id="school"
            name="school"
            placeholder="Enter school / university"
            value={formData.school}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="details">
          <label htmlFor="degree">Degree</label>
          <input
            id="degree"
            name="degree"
            placeholder="Enter degree / field of study"
            value={formData.degree}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="details">
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            name="startDate"
            placeholder="Enter start date"
            value={formData.startDate}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="details">
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            name="endDate"
            placeholder="Enter end date"
            value={formData.endDate}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="buttons">
          <button className="delete" onClick={removeItem}>
            Delete
          </button>
          <div className="edit">
            <button className="cancel" onClick={toggleFill}>
              Cancel
            </button>
            <button type="submit" className="save">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
