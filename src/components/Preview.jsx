import "../styles/Preview.css";
import PersonalInfo from "./preview-sections/PersonalInfo";

export default function Preview({ name }) {
  return (
    <div className="preview">
      <PersonalInfo name={name} />
    </div>
  );
}
