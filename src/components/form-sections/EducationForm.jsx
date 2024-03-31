export default function EducationForm({
  experiences,
  setExperiences,
  tempExperiences,
  setTempExperiences,
  id,
  toggleFill,
  toggleTemp,
}) {
  const formData = tempExperiences.find((experience) => experience.id === id);
  console.log(formData);

  function handleInputChange(e) {
    const { name, value } = e.target;
    const updatedTempExperiences = [...tempExperiences];
    const idx = updatedTempExperiences.findIndex(
      (experience) => experience.id === id,
    );
    updatedTempExperiences[idx] = {
      ...updatedTempExperiences[idx],
      [name]: value,
    };
    setTempExperiences(updatedTempExperiences);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedTempExperiences = [...tempExperiences];
    const idx = updatedTempExperiences.findIndex(
      (experience) => experience.id === id,
    );
    updatedTempExperiences[idx].isSaved = true;
    setTempExperiences(updatedTempExperiences);
    setExperiences(updatedTempExperiences);
    toggleFill(e);
    toggleTemp();
  }

  function cancelItem(e) {
    e.preventDefault();
    const exp = tempExperiences.find((experience) => experience.id === id);
    if (!exp.isSaved) {
      const newList = tempExperiences.filter(
        (experience) => experience.id !== id,
      );
      setTempExperiences(newList);
    }
    toggleFill(e);
    toggleTemp();
  }

  function removeItem(e) {
    e.preventDefault();
    const newList = experiences.filter((experience) => experience.id !== id);
    setExperiences(newList);
    setTempExperiences(newList);
    toggleFill(e);
    toggleTemp();
  }

  return (
    <form onSubmit={handleSubmit}>
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
            <button className="cancel" onClick={cancelItem}>
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
