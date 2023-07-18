import React, { useState } from "react";
import styles from "./experience.module.less";
import ContainerBox from "../commonComponents/ContainerBox";
import image from "../../assets/magicEdtech.png";

const Experience = () => {
  const [experienceData] = useState([
    {
      id: 1,
      imageName: image,
      yearMonthFromTo: "April 2023 - Present",
      companyName: "Magic EdTech Pvt Ltd",
      designationName: "Consultant",
      descripition:
        "Working on Selenium Webdriver - To create the Automation Tool.",
        url:"https://www.linkedin.com/company/magic-edtech/mycompany/",
    },
    {
      id: 2,
      imageName: image,
      yearMonthFromTo: "April 2022 - Arpil 2023",
      companyName: "Magic EdTech Pvt Ltd",
      designationName: "Senior Associate",
      descripition:
        "Worked as a Front End Developer by using Vue Js Developer and React Js Developer.",
        url:"https://www.linkedin.com/company/magic-edtech/mycompany/",
    },
    {
      id: 3,
      imageName: image,
      yearMonthFromTo: "August 2021 - April 2022",
      companyName: "Magic EdTech Pvt Ltd",
      designationName: "Associate",
      descripition:
        "Experienced worked on Bellxcel Project in which I have done coding and problem solving to achieve set goals in a given time frame.",
        url:"https://www.linkedin.com/company/magic-edtech/mycompany/",
    },
    {
      id: 4,
      imageName: image,
      yearMonthFromTo: "April, 2021 - August 2021",
      companyName: "Magic EdTech Pvt Ltd",
      designationName: "Software Trainee",
      descripition:
        "Understanding project requirements and completing all duties assigned by the Supervisor. Worked on Basic concepts of Web Development Techs and Java.",
        url:"https://www.linkedin.com/company/magic-edtech/mycompany/",
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>
        <span className={styles.subtitle}>Over 2 years 4 Months of experience</span>
        <h2 className={styles.subtitle2}>My Experience</h2>
      </div>
      <div className={styles.experienceBox}>
        {
          experienceData && experienceData.map((item) => {
            return <ContainerBox key={item.id} imageName={item.imageName} yearMonthFromTo={item.yearMonthFromTo} title={item.companyName} profile={item.designationName} descripition={item.descripition}/>;
          })
        }
      </div>
    </div>
  );
};

export default Experience;
