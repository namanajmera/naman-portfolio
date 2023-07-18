import React, { useState } from 'react';
import styles from './education.module.less';
import lpu from "../../assets/lpu.png";
import jecrc from "../../assets/jecrc.png"
import subodh from "../../assets/subodh.png";
import ContainerBox from '../commonComponents/ContainerBox';

const Education = () => {
  const [experienceData] = useState([
    {
      id: 1,
      imageName: lpu,
      yearMonthFromTo: "2019 - 2021",
      companyName: "Lovely Professional University",
      courseName: "Master Of Computer Application",
      grade: "Grade: 8.6 CGPA",
      url:"https://www.linkedin.com/school/lovely-professional-university/"
    },
    {
      id: 2,
      imageName: jecrc,
      yearMonthFromTo: "2016 - 2019",
      companyName: "JECRC University",
      courseName: "Bachelor Of Computer Application",
      grade: "Grade: 8.23 CGPA",
      url:"https://www.linkedin.com/school/jecrcuniversity/"
    },
    {
      id: 3,
      imageName: subodh,
      yearMonthFromTo: "2015- 2016",
      companyName: "Subodh Public School",
      courseName: "12th Commerce + Informatics Practices",
      grade: "Grade: 69.8%",
      url:"https://www.linkedin.com/school/subodh-public-school/"
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>
        <span className={styles.subtitle}>Master and Bachelor</span>
        <h2 className={styles.subtitle2}>Education</h2>
      </div>
      <div className={styles.experienceBox}>
        {
          experienceData && experienceData.map((item) => {
            return <ContainerBox key={item.id} imageName={item.imageName} yearMonthFromTo={item.yearMonthFromTo} title={item.companyName} profile={item.courseName} descripition={item.grade} url={item.url}/>;
          })
        }
      </div>
    </div>
  )
}

export default Education
