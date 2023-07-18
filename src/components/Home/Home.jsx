import React, { useEffect, useState } from "react";
import HomeStyle from "./home.module.less";
import naman from "../../assets/naman.png";
import Typed from "typed.js";

const Home = () => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const options = {
      strings: ["React.Js Developer.", "Vue.Js Developer."],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
      onStringTyped: (arrayPos, self) => {
        setTypedText(self.strings[arrayPos]);
      },
    };

    const typed = new Typed("#typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);
  const handleDownload = (e) => {
    e.preventDefault();
    const downloadLink =
      "https://drive.google.com/file/d/1IRuMUcJd0yYhdD4BcjtcR0sbYZjmIpwr/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = "NamanCV.pdf";
    link.target = "_blank";
    link.click();
  };
  return (
    <div className={HomeStyle.container}>
      <div className={HomeStyle.containerLeft}>
        <div className={HomeStyle.information}>
          <div className={HomeStyle.userInfoHeader}>
            <div className={HomeStyle.user}>
              {/* <img className={HomeStyle.profileImage} src={profile} alt="" /> */}
              <span className={HomeStyle.info1}>WELCOME TO MY WORLD</span>
            </div>
            <h2 className={HomeStyle.selfInfo}>
              Hi, I am <span>Naman</span>
            </h2>
            <span className={HomeStyle.feature}>a </span>
            <span className={HomeStyle.feature} id="typed-text">
              {typedText}
            </span>
            <p className={HomeStyle.desc}>
              I'm a software engineer with a focus on front-end development. My
              expertise lies in Vue.js and React.js, and I have a proven track
              record of delivering high-quality solutions that meet the needs of
              clients and users.
            </p>
          </div>
          <div className={HomeStyle.userInfoFooter}>
            <div className={HomeStyle.info}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-file"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
              <span>Web App Developer</span>
            </div>
            <div className={HomeStyle.info}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>cool.naman.ajmera@gmail.com</span>
            </div>
            <div className={HomeStyle.info}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-map-pin"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Nodia, India</span>
            </div>
          </div>
        </div>
        <div className={HomeStyle.contact}>
          <div className={HomeStyle.dataInfo}>
            <p>Download my curriculum:</p>
            <div className={HomeStyle.action}>
              <button
                type="submit"
                className={"primary-button"}
                onClick={handleDownload}
              >
                Download CV
              </button>
              <button type="submit" className={"primary-button"}>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={HomeStyle.containerRight}>
        <img className={HomeStyle.imageView} src={naman} alt="" />
      </div>
    </div>
  );
};

export default Home;
