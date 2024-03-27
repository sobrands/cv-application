import "../../styles/PersonalDetails.css";

export default function PersonalDetails({ handleNameChange }) {
  return (
    <div className="form">
      <h1>Personal Details</h1>
      <div className="fields">
        <div className="details">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            placeholder="First and last name"
            onChange={handleNameChange}
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
          ></input>
        </div>
        <div className="details">
          <label htmlFor="phoneNumber">
            Phone Number<span>recommended</span>
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter phone number"
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
          ></input>
        </div>
      </div>
    </div>
  );
}
