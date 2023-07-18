import React, { useState } from "react";
import NavBarStyle from "./Navbar.module.less";
import self from "../../assets/self.png";
import { navBarOptions } from "../../utilities/commonVariables";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState(location.pathname);
  const handleLocation = (path) => {
    setCurrentPath(path);
  }
  return (
    <nav className={NavBarStyle.nav}>
      <div className={NavBarStyle.titleContainer}>
        <img className={NavBarStyle.image} src={self} alt="" />
        <h3 className={NavBarStyle.title}>Naman Ajmera</h3>
      </div>
      <ul className={NavBarStyle.listContainer}>
        {navBarOptions &&
          navBarOptions.map((item, index) => {
            return (
              <li key={index} className={NavBarStyle.navOptions}>
                <Link
                  to={item.path}
                  onClick={() => handleLocation(item.path)}
                  className={`${NavBarStyle.options} ${
                    item.path === currentPath ? NavBarStyle.active : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Navbar;
