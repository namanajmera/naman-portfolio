import React from 'react';
import styles from "./skillBar.module.less";

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className={styles.skill_bar}>
      <div className={styles.title}>
      <div className={styles.skill_name}>{skill}</div>
      <div className={styles.percentage}>{percentage}%</div>
      </div>
      <div className={styles.bar_container}>
        <div className={styles.bar} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

export default SkillBar
