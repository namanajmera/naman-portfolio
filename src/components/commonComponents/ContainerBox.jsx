import React from "react";
import styles from "./containerBox.module.less";

const ContainerBox = ({
  imageName,
  yearMonthFromTo,
  title,
  profile,
  descripition,
  url,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.experience_left}>
        <div className={styles.experience_image}>
          <img src={imageName} alt="Personal Portfolio" />
        </div>
        <div className={styles.experience_center}>
          <span className={styles.date}>{yearMonthFromTo}</span>
          <h4 className={styles.experience_title}>{title}.</h4>
          <h6 className={styles.subtitle}><strong>{profile}</strong></h6>
          <p className={styles.disc}>{descripition}</p>
        </div>
      </div>
      <div className={styles.experience_right}>
        <div className={styles.experience_footer}>
          <a
            className={styles.rn_btn}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <span>Visit</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContainerBox;
