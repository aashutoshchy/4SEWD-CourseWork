import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className={isHome ? "" : "dark-footer"}>
      <ul class="social-links">
        <li>
          <a href="https://www.instagram.com/aaashutoshchy_">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/artist/4cydZloyVyEfBQYKZhcVWC?si=2HDTtByYS3uQoihStXgDdg">
            <i class="fa-brands fa-spotify"></i>
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@aaashutoshchy_">
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCpQj9LHRRYkcfuA8GVp8mgQ">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
      <p class="copyright-info">
        © 2026 Aashutosh Chaudhary. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
