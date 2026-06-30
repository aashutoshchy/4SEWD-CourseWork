import React from "react";
import Overlay from "./Overlay";

function Home() {
  return (
    <main>
      <img className="home-background" src="/src/assets/main-bg.png" alt="" />
      <div className="home-heading">
        <img src="/src/assets/home-heading.png" alt="" />
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
