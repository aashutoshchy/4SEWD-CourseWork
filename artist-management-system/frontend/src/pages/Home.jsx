import React from "react";
import Overlay from "./Overlay";
import mainBg from "../assets/main-bg.png";
import homeHeading from "../assets/home-heading.png";
import "./Home.css";

function Home() {
  return (
    <main>
      <img className="home-background" src={mainBg} alt="Background Image" />
      <div className="home-heading">
        <img src={homeHeading} alt="Ashutosh Chaudhary" />
        <a
          className="latest-release-btn"
          href="https://push.fm/fl/6N2C1Fcj"
          target="_blank"
        >
          New Release<i className="fa-solid fa-play"></i>
        </a>
      </div>
    </main>
  );
}

export default Home;
