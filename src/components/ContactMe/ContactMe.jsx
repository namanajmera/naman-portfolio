import React from "react";
import styles from "./contactMe.module.less";
import contact from "../../assets/contact.png";

const ContactMe = () => {
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.heading}>Contact With Me</h1>
      <div className={styles.contactDetail}>
        <div className={styles.contactInfo}>
          <div className={styles.thumbnail}>
            <img src={contact} alt="Contact" className={styles.contactImage} />
          </div>
          <div className={styles.title_area}>
            <h4>Naman Ajmera</h4>
            <span>Software Engineer</span>
          </div>
          <div className={styles.description}>
            <p>
              I'm a software engineer with a focus on front-end development.
            </p>
            <span>8696696426</span>
            <span>cool.naman.ajmera@gmail.com</span>
          </div>
          {/* <div className={styles.socialMediaButtons}>
          <button className={styles.socialMediaButton}>Button 1</button>
          <button className={styles.socialMediaButton}>Button 2</button>
          <button className={styles.socialMediaButton}>Button 3</button>
        </div> */}
        </div>
        <div className={styles.contactForm}>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" cols={30} rows={30} />
            <button type="submit">
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
