import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const navigate = useNavigate();
  const goIndex = () => {
    navigate("/#index");
  };
  return (
    <div>
      <div className="navbar">
        <div className="navContainer">
          <p className="logo">
            DipDev <span className="dotLogo">.</span>
          </p>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              setOpenNavbar(!openNavbar);
            }}
            className="btnNav"
          />
          <div className={openNavbar ? "navItems open" : "navItems"}>
            <button className="navButton" onClick={goIndex}>
              Home
            </button>
            <button className="navButton">About</button>
            <button className="navButton">Projects</button>
            <button className="navButton">Experience</button>
            <button className="navButton">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
