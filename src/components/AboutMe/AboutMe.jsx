import "./AboutMe.css";
import github_icon from "../../assets/icons/github_icon.svg";
import linkedin_icon from "../../assets/icons/linkedin_icon.svg";
import email_icon from "../../assets/icons/email_icon.svg";
import cv from '../../assets/Resume_06102023.pdf'


function AboutMe() {
    return (
        <section id="aboutme" class="">
            <div class="container aboutme_container">
                <div>
                    <h2>About</h2>
                </div>
                <div class="">
                    <p>Web and Shopify developer with 2 years of experience in helping local and multinational brands develop
                    and maintain e-commerce websites. Proven experience in creating brand pages and email templates
                    using HTML, CSS, JavaScript, and Liquid. A collaborative communicator who is able to multitask
                    effectively in a timely manner.</p> 
                    </div>
                    <div class="aboutme_contact_icons">
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
                    <a href={cv} download class="button download_cv">Download CV</a>
                </div>
            </div>
        </section>
    );
}
  

export default AboutMe;