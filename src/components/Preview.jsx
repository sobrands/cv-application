import "../styles/Preview.css";
import PersonalInfo from "./preview-sections/PersonalInfo";

export default function Preview({ name, email, number, address }) {
  return (
    <div className="preview">
      <PersonalInfo
        name={name}
        email={email}
        number={number}
        address={address}
      />
    </div>
  );
}
