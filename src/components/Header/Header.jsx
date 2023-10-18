import "./Header.css";
import logo from "../../assets/logo.svg";

function Header() {
    return (
        <header id="header" class="">
            <div class="mobile_nav">
                <div class="mobile_nav_upper">
                    <a href="#home">Home</a>
                    <a href="#aboutme">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="mobile_nav_lower">
                    <button class="download_cv">Download CV <i class="bx bx-download"></i></button>
                </div>
            </div>
            <nav class="header_nav container">
                <div class="header_nav_left">
                    <img src={logo} alt="Logo" class="logo"/>
                </div>
                <div class="header_nav_right">
                    <div class="d-none d-sm-none d-md-flex">
                        <a href="#home">Home</a>
                        <a href="#aboutme">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div class="mobile_nav_button d-flex d-sm-flex d-md-none">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>                    
                    </div>
                </div>
            </nav>
        </header>
    );
}
  

export default Header;