import React from "react";
import FooterStyle from "./footer.module.less";
import linkedinLogo from "./../../assets/linkedin.svg";
import leetcodeLogo from "../../assets/leetcode.svg";
import github from "../../assets/github.svg";
import profilePicture from "../../assets/self.png";

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <img className={FooterStyle.footer__logo} src={profilePicture} alt="" />
      <div>
        <a
          className={FooterStyle.footer__button}
          target="_blank"
          href="https://www.linkedin.com/in/namanajmera/"
          rel="noreferrer"
        >
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a
          className={FooterStyle.footer__button}
          href="https://leetcode.com/namanAjmera/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={leetcodeLogo} alt="LeetCode" />
        </a>
        <a
          className={FooterStyle.footer__button}
          href="https://github.com/namanajmera"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" />
        </a>
      </div>
      <p className={FooterStyle.footer__text}>
        Designed and developed by <span>Naman Ajmera</span>
      </p>
      <p className={FooterStyle.footer__text}>
        &copy; {new Date().getFullYear()} Your Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
