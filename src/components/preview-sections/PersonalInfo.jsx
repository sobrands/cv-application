import "../../styles/PersonalInfo.css";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function PersonalInfo({ personalInfo }) {
  const hasEmail = personalInfo.email.length > 0;
  const hasNumber = personalInfo.number.length > 0;
  const hasAddress = personalInfo.address.length > 0;

  return (
    <div className="personalInfo">
      <h1 className="fullName">{personalInfo.name}</h1>
      <div className="otherInfo">
        {hasEmail && (
          <div className="deets email">
            <MdEmail className="deetsIcon" />
            <span>{personalInfo.email}</span>
          </div>
        )}
        {hasNumber && (
          <div className="deets number">
            <FaPhoneAlt className="deetsIcon" />
            <span>{personalInfo.number}</span>
          </div>
        )}
        {hasAddress && (
          <div className="deets address">
            <MdLocationPin className="deetsIcon" />
            <span>{personalInfo.address}</span>
          </div>
        )}
      </div>
    </div>
  );
}
