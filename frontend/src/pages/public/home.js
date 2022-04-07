import React, { useState } from "react";

export default function Home() {
  //this will add zero pixel maximum height.
  const [height, setHeight] = useState("0px");
  /*this function will check if the maximum height is zero,
    then it will set height to 130px, otherwise maximum height is zero.  
    */
  function toggleMenu() {
    if (height == "0px") setHeight("130px");
    else setHeight("0px");
  }
  return (
    <div className="container">
      <div className="navbar-container">
        <div className="navbar">
          <img
            className="logo"
            onClick={() => (window.location.href = "/")}
            src={require("../../media/icons/icons8-infinity-90.png")}
          />
          <p>InfinityTracker™</p>
          <nav>
            <ul id="menuList" style={{ maxHeight: height }}>
              <li>
                <a href="/">InfinityTracker™</a>
              </li>
              <li>
                <a href="./login">
                  SIGN UP | LOGIN
                  <img
                    src={require("../../media/icons/icons8-enter-96.png")}
                    width="15px"
                    height="13px"
                  />
                </a>
              </li>
            </ul>
          </nav>
          <img
            className="menu-icon"
            src={require("../../media/icons/icons8-menu-squared-50.png")}
            onClick={toggleMenu}
          />
        </div>
      </div>

      <div className="info-row-container">
        <div className="row-inner-element">
          <div className="col-1">
            <h2>InfinityTracker™</h2>
            <h3>
              Track your data to see how
              <br />
              you are doing each day
            </h3>
            <p>(Mobile compatible)</p>
            <button
              className="info-sign-up-btn"
              onClick={() => (window.location.href = "./login")}
              type="button"
            >
              SIGN UP NOW
              <img src={require("../../media/icons/icons8-arrow-100.png")} />
            </button>
          </div>
          <div className="col-2">
            <img
              className="subs-icon"
              src={require("../../media/image/1755_U1RVRElPIEtBVCA0MTYtODg.jpg")}
              alt="couples running"
            />
          </div>
        </div>
      </div>

      <div className="other-storie_wrapper">
        <div className="other-storie_card">
          <div className="other-storie_content">
            <h2 className="other-storie_title">Customized your activity</h2>
            <p className="other-storie_paragraph">
              <b>InfinityTracker™</b> enable you to create your own activity via
              our simple form or chooseing from activities that you have already
              done in the past. In the near future, we will enhance your
              experience by having an option to track more data. We currently
              offer duration and date.
            </p>
          </div>
        </div>
        <div className="other-storie_card">
          <div className="other-storie_content">
            <h2 className="other-storie_title">View/Edit your dashboard</h2>
            <p className="other-storie_paragraph">
              In the next release, we will let you customized your own
              dashboard. For now <b>InfinityTracker™</b> will let you view your
              saved activities along with data. So you know how to plan for your
              exercise and get fit before summer!
            </p>
          </div>
        </div>
        <div className="other-storie_card">
          <div className="other-storie_content">
            <h2 className="other-storie_title">Manage your profile</h2>
            <p className="other-storie_paragraph">
              At <b>InfinityTracker™</b> we love to customize. When you sign up
              for an account, you will have an ability to manage your profile
              eg. changing your always forgotten password! We will surely update
              more functionality in the near future.
            </p>
          </div>
        </div>
      </div>

      <div className="daily-info_wrapper">
        <p className="daily-info_paragraph">
          STAY INFORMED.
          <br />
          GET AN UPDATE ON OUR LATEST FEATURES.
        </p>
        <form className="daily-info_form">
          <input className="daily-info_email-input" placeholder="E-mail" />
          <button className="daily-info_submit" type="button">
            SUBSCRIBE
          </button>
        </form>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>
                <a href="/">
                  <img
                    src={require("../../media/icons/icons8-infinity-90.png")}
                    width="40px"
                  />
                </a>
              </h4>
              <ul>
                <li>
                  <a href="/">InfinityTracker™</a>
                </li>
                <li className="footer-sign-btn">
                  <a href="./login">SIGN UP</a>
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
