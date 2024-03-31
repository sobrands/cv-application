import "../../styles/ExperienceInfo.css";

export default function EducationInfo({
  showTempEdu,
  eduExperiences,
  tempEduExperiences,
}) {
  return (
    <div className="info">
      {showTempEdu ? (
        <>
          <p>Education</p>
          {tempEduExperiences.map((experience) => (
            <div key={experience.id} className="experience">
              <p id="school">{experience.school}</p>
              <p id="degree">{experience.degree}</p>
              <div className="dates">
                <p id="startDate">{experience.startDate}</p>
                {experience.endDate.length > 0 && (
                  <>
                    <p>&nbsp;-&nbsp;</p>
                    <p id="endDate">{experience.endDate}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </>
      ) : (
        eduExperiences.length > 0 && (
          <>
            <p>Education</p>
            {tempEduExperiences.map((experience) => (
              <div key={experience.id} className="experience">
                <p id="school">{experience.school}</p>
                <p id="degree">{experience.degree}</p>
                <div className="dates">
                  <p id="startDate">{experience.startDate}</p>
                  {experience.endDate.length > 0 && (
                    <>
                      <p>&nbsp;-&nbsp;</p>
                      <p id="endDate">{experience.endDate}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </>
        )
      )}
    </div>
  );
}
