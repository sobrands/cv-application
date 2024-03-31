import "../../styles/PersonalDetails.css";

export default function PersonalDetails({ handleInputChange }) {
  return (
    <form className="formSection">
      <h1>Personal Details</h1>
      <div className="fields">
        <div className="details">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            placeholder="First and last name"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="details">
          <label htmlFor="email">
            Email<span>recommended</span>
          </label>
          <input
            id="email"
            name="email"
            placeholder="Enter email address"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="details">
          <label htmlFor="number">
            Phone Number<span>recommended</span>
          </label>
          <input
            id="number"
            name="number"
            placeholder="Enter phone number"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="details">
          <label htmlFor="address">
            Address<span>recommended</span>
          </label>
          <input
            id="address"
            name="address"
            placeholder="City, Country"
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
    </form>
  );
}
