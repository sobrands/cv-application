import "../styles/Preview.css";
import PersonalInfo from "./preview-sections/PersonalInfo";

export default function Preview({ personalInfo }) {
  return (
    <div className="preview">
      <PersonalInfo personalInfo={personalInfo} />
    </div>
  );
}
