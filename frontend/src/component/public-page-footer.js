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
                  alt=""
                />
              </a>
            </h4>
            <ul>
              <li className="footer-sign-btn">
                <a href="./internal-access">SIGN UP</a>
              </li> 
              <li>
                <a 
                href="https://www.isaphu.com/" 
                target="_blank" 
                style={myStyle}
                rel="noreferrer"
                >
                  Developer
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <p>
              <img
                src={require("../media/icons/icons8-location-50.png")}
                width="15px"
                alt=""
              />
              4765 Alfred Drive
              <br />
              New York NY 10011
            </p>
            <p>
              <img
                src={require("../media/icons/icons8-phone-50.png")}
                width="15px"
                alt=""
              />
              909-690-8838
            </p>
            <p>
              <img
                src={require("../media/icons/icons8-email-64.png")}
                width="15px"
                alt=""
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
