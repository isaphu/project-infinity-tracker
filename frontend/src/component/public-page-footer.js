const myStyle = {
  color: "rgb(96,96,109)",
  background: "none"
}

export default function PublicFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>
              <a href="/">
                <img
                  src={require("../media/icons/icons8-infinity-90.png")}
                  width="40px"
                />
              </a>
            </h4>
            <ul>
              <li>
                <a href="/">InfinityTracker™</a>
              </li>
              <li className="footer-sign-btn">
                <a href="./internal-access">SIGN UP</a>
              </li> 
              <li>
                <a href="https://isa-phu.vercel.app/" target="_blank" style={myStyle}>Developer</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <p>
              <img
                src={require("../media/icons/icons8-location-50.png")}
                width="15px"
              />
              4765 Alfred Drive
              <br />
              New York NY 10011
            </p>
            <p>
              <img
                src={require("../media/icons/icons8-phone-50.png")}
                width="15px"
              />
              909-690-8838
            </p>
            <p>
              <img
                src={require("../media/icons/icons8-email-64.png")}
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
  );
}
