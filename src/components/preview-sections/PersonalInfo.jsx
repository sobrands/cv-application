import "../../styles/PersonalInfo.css";

export default function PersonalInfo({ name }) {
  return (
    <div className="personalInfo">
      <h1 className="fullName">{name}</h1>
    </div>
  );
}
