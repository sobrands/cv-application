import "../styles/Preview.css";
import PersonalInfo from "./preview-sections/PersonalInfo";
import EducationInfo from "./preview-sections/EducationInfo";

export default function Preview({
  personalInfo,
  showTempEdu,
  eduExperiences,
  tempEduExperiences,
}) {
  return (
    <div className="preview">
      <PersonalInfo personalInfo={personalInfo} />
      <EducationInfo
        showTempEdu={showTempEdu}
        eduExperiences={eduExperiences}
        tempEduExperiences={tempEduExperiences}
      />
    </div>
  );
}
