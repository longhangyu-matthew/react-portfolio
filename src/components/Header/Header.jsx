import "./Header.css";
import logo from "../../assets/logo.svg";
import cv from '../../assets/Resume_06102023.pdf'

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
                    <a href={cv} download class="button download_cv">Download CV</a>
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