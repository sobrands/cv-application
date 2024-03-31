import "../styles/Preview.css";
import PersonalInfo from "./preview-sections/PersonalInfo";
import EducationInfo from "./preview-sections/EducationInfo";
import ExperienceInfo from "./preview-sections/ExperienceInfo";

export default function Preview({
  personalInfo,
  showTempEdu,
  eduExperiences,
  tempEduExperiences,
  experiences,
  tempExperiences,
  showTemp,
}) {
  return (
    <div className="preview">
      <PersonalInfo personalInfo={personalInfo} />
      <EducationInfo
        showTempEdu={showTempEdu}
        eduExperiences={eduExperiences}
        tempEduExperiences={tempEduExperiences}
      />
      <ExperienceInfo
        showTemp={showTemp}
        experiences={experiences}
        tempExperiences={tempExperiences}
      />
    </div>
  );
}
