import React, { useState } from "react";
import SkillBar from "../commonComponents/SkillBar";
import styles from "./professionalSkills.module.less";

const ProfessionalSkills = () => {
  const [skillSet] = useState([
    {
      id: 1,
      skillName: "React.Js",
      percentage: 85,
    },
    {
      id: 2,
      skillName: "Vue.Js",
      percentage: 80,
    },
    {
      id: 3,
      skillName: "TypeScript",
      percentage: 70,
    },
    {
      id: 4,
      skillName: "JavaScript",
      percentage: 80,
    },
    {
      id: 5,
      skillName: "Redux",
      percentage: 70,
    },
    {
      id: 6,
      skillName: "Rest APIs",
      percentage: 80,
    },
    {
      id: 7,
      skillName: "HTML5",
      percentage: 80,
    },
    {
      id: 8,
      skillName: "JAVA",
      percentage: 90,
    },
    {
      id: 9,
      skillName: "CSS",
      percentage: 60,
    },
    {
      id: 10,
      skillName: "MySQL",
      percentage: 75,
    },
    {
      id: 11,
      skillName: "Node.Js",
      percentage: 80,
    },
    {
      id: 12,
      skillName: "DBMS",
      percentage: 65,
    },
    {
      id: 13,
      skillName: "Git",
      percentage: 75,
    },
    {
      id: 14,
      skillName: "OS",
      percentage: 45,
    },
    {
      id: 15,
      skillName: "Python",
      percentage: 65,
    },
    {
      id: 16,
      skillName: "C,C++",
      percentage: 60,
    },
  ]);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Skills</h1>
      <div className={styles.skill_set}>
        {
          skillSet && skillSet.map((item) => {
            return <SkillBar key={item.id} skill={item.skillName} percentage={item.percentage} />
          })
        }
      </div>
    </div>
  );
};

export default ProfessionalSkills;
