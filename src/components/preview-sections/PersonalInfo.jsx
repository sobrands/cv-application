import "../../styles/PersonalInfo.css";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function PersonalInfo({ name, email, number, address }) {
  const hasEmail = email.length > 0;
  const hasNumber = number.length > 0;
  const hasAddress = address.length > 0;

  return (
    <div className="personalInfo">
      <h1 className="fullName">{name}</h1>
      <div className="otherInfo">
        {hasEmail && (
          <div className="deets email">
            <MdEmail className="deetsIcon" />
            <span>{email}</span>
          </div>
        )}
        {hasNumber && (
          <div className="deets number">
            <FaPhoneAlt className="deetsIcon" />
            <span>{number}</span>
          </div>
        )}
        {hasAddress && (
          <div className="deets address">
            <MdLocationPin className="deetsIcon" />
            <span>{address}</span>
          </div>
        )}
      </div>
    </div>
  );
}
