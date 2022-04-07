import React, {useState} from "react";

export default function Home() {
    //this will add zero pixel maximum height.
    const [height, setHeight] = useState("0px")
    /*this function will check if the maximum height is zero,
    then it will set height to 130px, otherwise maximum height is zero.  
    */
    function toggleMenu() {
        if (height == "0px") setHeight("130px");
        else setHeight("0px")
    }
    return (
        <div class="container">
        <div class="navbar-container">
            <div class="navbar">
                <img 
                class="logo"
                onClick={() => (window.location.href='/')} 
                src={require("../../media/icons/icons8-infinity-90.png")}
                />
                <p>InfinityTracker™</p>
                <nav>
                    <ul id="menuList" style {{maxHeight: height}}>
                        <li>
                            <a href="/">InfinityTracker™</a>
                        </li>
                        <li>
                            <a 
                            href="./login">
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
                class="menu-icon" 
                src={require("../media/icons/icons8-menu-squared-50.png")} 
                onClick={toggleMenu}
                />
            </div>
        </div>

        <div class="info-row-container">
            <div class="row-inner-element">
                <div class="col-1">
                    <h2>InfinityTracker™</h2>
                    <h3>
                        Track your data to see how
                        <br />
                        you are doing each day
                    </h3>
                    <p>(Mobile compatible)</p>
                    <button 
                        class="info-sign-up-btn" 
                        onclick={() => (window.location.href='/')} 
                        type="button">
                            SIGN UP NOW
                        <img
                        src={require("../../media/icons/icons8-arrow-100.png")}
                        />
                    </button>
                </div>
                <div class="col-2">
                    <img 
                    class="subs-icon" 
                    src={require("../../media/image/1755_U1RVRElPIEtBVCA0MTYtODg.jpg")} 
                    alt="couples running"
                    />
                </div>
            </div>
        </div>

        <div class="other-storie_wrapper">
            <div class="other-storie_card">
                <div class="other-storie_content">
                    <h2 class="other-storie_title">Customized your activity</h2>
                    <p class="other-storie_paragraph">
                        <b>InfinityTracker™</b> enable you to create your own activity
                        via our simple form or chooseing from activities that you have already done in the past. 
                        In the near future, we will enhance your experience by having an option to track more data.
                        We currently offer duration and date.
                    </p>
                </div>
            </div>
            <div class="other-storie_card">
                <div class="other-storie_content">
                    <h2 class="other-storie_title">View/Edit your dashboard</h2>
                    <p class="other-storie_paragraph">In the next release, we will let you customized your own dashboard. 
                        For now <b>InfinityTracker™</b> will let you view your saved activities along with data. So you know 
                        how to plan for your exercise and get fit before summer! 
                    </p>
                </div>
            </div>
            <div class="other-storie_card">
                <div class="other-storie_content">
                    <h2 class="other-storie_title">Manage your profile</h2>
                    <p class="other-storie_paragraph">At <b>InfinityTracker™</b> we love to customize. When you sign up for 
                        an account, you will have an ability to manage your profile eg. changing your always forgotten password!
                        We will surely update more functionality in the near future.
                    </p>
                </div>
            </div>
        </div>

        <div class="daily-info_wrapper">
            <p class="daily-info_paragraph">
                STAY INFORMED.
                <br />
                GET AN UPDATE ON OUR LATEST FEATURES.
            </p>
            <form class="daily-info_form">
                <input class="daily-info_email-input" placeholder="E-mail" />
                <button class="daily-info_submit" type="button">
                    SUBSCRIBE
                </button>
            </form>
        </div>

        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>
                            <a 
                            href="/"> 
                                <img 
                                    src="../media/icons/icons8-infinity-90.png"
                                    style="width: 3rem;"
                                />
                            </a>
                        </h4>
                        <ul>
                            <li>
                                <a href="/">InfinityTracker™</a>
                            </li>
                            <li class="footer-sign-btn">
                                <a href="./login">SIGN UP</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-col">
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
                            src={require("../../media/icons/icons8-email-64.png" )}
                            width="15px"
                            /> 
                            contact@it.com
                        </p>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a 
                            href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a 
                            href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a 
                            href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    );
}