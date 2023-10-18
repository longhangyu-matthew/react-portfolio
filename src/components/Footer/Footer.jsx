import "./Footer.css";
import github_icon from "../../assets/icons/github_icon.svg";
import linkedin_icon from "../../assets/icons/linkedin_icon.svg";
import email_icon from "../../assets/icons/email_icon.svg";

function Footer() {
    return (
        <section id="footer" class="">
            <div class="footer_container container">
                <div class="footer_contact_icons">
                    <div>
                        <a href="https://github.com/longhangyu-matthew" target="_blank" rel="noreferrer noopener"><img src={github_icon} alt="Github" class="github"/></a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/longhangyu-matthew/" target="_blank" rel="noreferrer noopener"><img src={linkedin_icon} alt="LinkedIn" class="linkedin"/></a>
                    </div>
                    <div>
                        <a href="mailto:longhangyu0809@gmail.com" rel="noreferrer noopener"><img src={email_icon} alt="Email" class="email"/></a>
                    </div>
                </div>
                <div>
                    This website was built with ReactJS
                </div>
            </div>
        </section>
    );
}
  

export default Footer;