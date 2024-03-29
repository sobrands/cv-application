export default function EducationForm({ handleSubmit, toggleFill }) {
  return (
    <form>
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
            <button className="save" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}