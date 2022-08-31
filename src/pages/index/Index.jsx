import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./index.css";
import hero from "../../assets/Programming-pana.png";

const Index = () => {
  return (
    <div className="wrapHome" id="index">
      <Navbar />
      <div className="homeContainer">
        <div className="introduction">
          <h1>Hi There!👋 </h1>
          <p>I'm Dipta Dhananjaya</p>
          <button className="btnAbout">About Me</button>
        </div>
        <img src={hero} alt="" className="imgHero" />
      </div>
    </div>
  );
};

export default Index;
