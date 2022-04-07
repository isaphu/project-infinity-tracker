import React, { useState } from "react";

export default function Header() {
  const [height, setHeight] = useState("0px");

  function toggleMenu() {
    if (height == "0px") setHeight("130px");
    else setHeight("0px");
  }

  return (
    <div className="navbar-container">
      <div className="navbar">
        <img
          onClick={() => (window.location.href = "./activitiesform")}
          src={require("../media/icons/icons8-infinity-90.png")}
          className="logo"
        />
        <p>InfinityTracker™</p>
        <nav>
          <ul id="menuList" style={{ maxHeight: height }}>
            <li>
              <a href="./activitiesform">CREATE ACTIVITY</a>
            </li>
            <li>
              <a href="./dashboard">DASHBOARD</a>
            </li>
            <li>
              <a href="./profile">PROFILE</a>
            </li>
            <li>
              <a href="/">
                LOG OUT
                <img
                  width="15px"
                  height="12px"
                  src={require("../media/icons/icons8-log-out-64.png")}
                />
              </a>
            </li>
          </ul>
        </nav>
        <img
          src={require("../media/icons/icons8-menu-squared-50.png")}
          className="menu-icon"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
}
