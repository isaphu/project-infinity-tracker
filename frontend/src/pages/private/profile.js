import React from "react";
import Header from "../../component/header";

export default function Profile() {
  return (
    <div class="container">
      <Header />

      <div className="user-container">
        <div className="user-inner-element">
          <div className="user-title">Hi! (Name)</div>
          <form action="#">
            <div className="user-details">
              <div className="personal-info-box">
                <span className="personal-details">Name</span>
                <input type="text" value="John" required />
              </div>
              <div className="personal-info-box">
                <span className="personal-details">Surname</span>
                <input type="text" value="Doe" required />
              </div>
              <div className="personal-info-box">
                <span className="personal-details">Birthday</span>
                <input type="date" value="1990-02-02" required />
              </div>
              <div className="personal-info-box">
                <span className="personal-details">Gender</span>
                <input type="text" value="Male" required />
              </div>
              <div className="personal-info-box">
                <span className="personal-details">Email</span>
                <input type="text" value="johndoe@gmail.com" required />
              </div>
              <div className="personal-info-box">
                <span className="personal-details">Password</span>
                <input type="password" value="brightcode" required />
              </div>
            </div>
            <div className="user-button">
              <input type="submit" value="UPDATE" />
            </div>
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>
                <a href="./create-activities">
                  <img
                    src={require("../../media/icons/icons8-infinity-90.png")}
                    width="40px"
                  />
                </a>
              </h4>
              <ul>
                <li>
                  <a href="./create-activities">CREATE ACTIVITY</a>
                </li>
                <li>
                  <a href="./dashboard">DASHBOARD</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Info</h4>
              <p>
                <img
                  src={require("../../media/icons/icons8-location-50.png")}
                  width="15px"
                />
                4765 Alfred Drive
                <br />
                New York NY 10011
              </p>
              <p>
                <img
                  src={require("../../media/icons/icons8-phone-50.png")}
                  width="15px"
                />
                909-690-8838
              </p>
              <p>
                <img
                  src={require("../../media/icons/icons8-email-64.png")}
                  width="15px"
                />
                contact@it.com
              </p>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
