import "../../styles/ExperienceInfo.css";

export default function EducationInfo({
  showTemp,
  experiences,
  tempExperiences,
}) {
  return (
    <div className="info">
      {showTemp ? (
        <>
          <p>Experience</p>
          {tempExperiences.map((experience) => (
            <div key={experience.id} className="experience exp">
              <p id="companyName">{experience.companyName}</p>
              <p id="position">{experience.position}</p>
              <div className="dates">
                <p id="startDate">{experience.startDate}</p>
                {experience.endDate.length > 0 && (
                  <>
                    <p>&nbsp;-&nbsp;</p>
                    <p id="endDate">{experience.endDate}</p>
                  </>
                )}
              </div>
              <p id="description">{experience.description}</p>
            </div>
          ))}
        </>
      ) : (
        experiences.length > 0 && (
          <>
            <p>Experience</p>
            {tempExperiences.map((experience) => (
              <div key={experience.id} className="experience exp">
                <p id="companyName">{experience.companyName}</p>
                <p id="position">{experience.position}</p>
                <div className="dates">
                  <p id="startDate">{experience.startDate}</p>
                  {experience.endDate.length > 0 && (
                    <>
                      <p>&nbsp;-&nbsp;</p>
                      <p id="endDate">{experience.endDate}</p>
                    </>
                  )}
                </div>
                <p id="description">{experience.description}</p>
              </div>
            ))}
          </>
        )
      )}
    </div>
  );
}
