import "./Projects.css";
import projects_react from "../../assets/projects/projects_react.jpg";
import projects_triangles from "../../assets/projects/projects_triangles.png";
import github_icon from "../../assets/icons/github_icon.svg";
import external_icon from "../../assets/icons/external_icon.svg";

function Projects() {
    return (
        <section id="projects" class="">
            <div class="container projects_container">
                <div>
                    <h2>Projects</h2>
                    <div class="typewritter projects">
                        <p>projects i have been involved in.</p>
                    </div>
                </div>
                <div class="projects_items_container">
                    <div class="items" data-aos="fade-right">
                        <div class="projects_image_container">
                            <img src={projects_react} alt="React Portforlio" class="projects_react"/>
                        </div>
                        <div class="projects_content_container">
                            <div>
                                <h4>React Portfolio</h4>
                            </div>
                            <div class="description">
                                The  website you are currently viewing. My first React project featuring <a href="https://spline.design/" target="_blank" rel="noreferrer noopener">Spline</a> - a free 3D design software that allows user to create interactive experiences within the browser. The theme of this website is inspired by <a href="https://drop.com/buy/drop-mito-gmk-laser-custom-keycap-set" target="_blank" rel="noreferrer noopener">Laser</a>, a cyberpunk themed custom keycap set.
                            </div>
                            <div class="projects_skills">
                                <div class="projects_skills_left">
                                    <div>
                                        HTML
                                    </div>
                                    <div>
                                        CSS
                                    </div>
                                    <div>
                                        Bootstrap
                                    </div>
                                    <div>
                                        React
                                    </div>
                                </div>
                                <div class="projects_skills_right">
                                    <a href="https://github.com/longhangyu-matthew/react-portfolio" target="_blank" rel="noreferrer noopener"><img src={github_icon} alt="Github" class="github"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="items" data-aos="fade-right">
                        <div class="projects_image_container">
                            <img src={projects_triangles} alt="triangles Beatmapping Contest" class="projects_triangles"/>
                        </div>
                        <div class="projects_content_container">
                            <div>
                                <h4>triangles Beatmapping Contest</h4>
                            </div>
                            <div class="description">
                                Winning entry of the triangles Beatmapping Contest hosted by osu! (online rhythm game with over 20 million registered users). It is a mapping and storyboarding contest featuring the latest theme song called 'triangles'. I was responsible for mapping and creating graphic assets for storyboarding in my team. Our entry is now bundled with all new installations of the osu!lazer client. 
                            </div>
                            <div class="projects_skills">
                                <div class="projects_skills_left">
                                    <div>
                                        Photoshop
                                    </div>
                                    <div>
                                        Illustrator
                                    </div>
                                </div>
                                <div class="projects_skills_right">
                                    <a href="https://www.youtube.com/watch?v=E7hZMwPn-a0" target="_blank" rel="noreferrer noopener"><img src={external_icon} alt="External" class="external"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="items" data-aos="fade-right">
                        <div class="projects_content_container">
                            <div>
                                <h4>Meyer</h4>
                            </div>
                            <div class="description">
                                One of the e-commerce websites I have been involved in developing and maintaining. In collaboration with other team members, I was responsible for revamping the website using HTML and CSS, developing festive and brand pages using Shopify Liquid, and creating email marketing templates using Klaviyo.
                            </div>
                            <div class="projects_skills">
                                <div class="projects_skills_left">
                                    <div>
                                        Shopify (Liquid)
                                    </div>
                                    <div>
                                        HTML
                                    </div>
                                    <div>
                                        CSS
                                    </div>
                                    <div>
                                        Klaviyo
                                    </div>
                                </div>
                                <div class="projects_skills_right">
                                    <a href="https://us.meyer.com/" target="_blank" rel="noreferrer noopener"><img src={external_icon} alt="External" class="external"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="items" data-aos="fade-right">
                        <div class="projects_content_container">
                            <div>
                                <h4>Pots and Pans</h4>
                            </div>
                            <div class="description">
                                One of the e-commerce websites I have been involved in developing and maintaining. In collaboration with other team members, I was responsible for revamping the website using HTML and CSS, developing festive and brand pages using Shopify Liquid, and creating email marketing templates using Klaviyo.                            
                            </div>
                            <div class="projects_skills">
                                <div class="projects_skills_left">
                                    <div>
                                        Shopify (Liquid)
                                    </div>
                                    <div>
                                        HTML
                                    </div>
                                    <div>
                                        CSS
                                    </div>
                                    <div>
                                        Klaviyo
                                    </div>
                                </div>
                                <div class="projects_skills_right">
                                    <a href="https://potsandpans.hk/" target="_blank" rel="noreferrer noopener"><img src={external_icon} alt="External" class="external"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="items" data-aos="fade-right">
                        <div class="projects_content_container">
                            <div>
                                <h4>Power Kid App</h4>
                            </div>
                            <div class="description">
                                A 3D mobile game that aims to promote environmental awareness and a low-carbon lifestyle to the younger generation. In collaboration with other team members, I was responsible for developing game scenes using Unity and creating 3D animations using Blender.                            </div>
                            <div class="projects_skills">
                                <div class="projects_skills_left">
                                    <div>
                                        Unity
                                    </div>
                                    <div>
                                        Blender
                                    </div>
                                </div>
                                <div class="projects_skills_right">
                                    <a href="https://play.google.com/store/apps/details?id=com.clp.poweryoueducationkit" target="_blank" rel="noreferrer noopener"><img src={external_icon} alt="External" class="external"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="items" data-aos="fade-right">
                        <div class="projects_content_container">
                            <div>
                                <h4>Sino</h4>
                            </div>
                            <div class="description">
                                A simple company website built with the Concrete5 Content Management System. I was responsible for designing and developing the website from start to finish.                            </div>
                            <div class="projects_skills">
                                <div class="projects_skills_left">
                                    <div>
                                        HTML
                                    </div>
                                    <div>
                                        CSS
                                    </div>
                                    <div>
                                        Concrete5 CMS
                                    </div>
                                </div>
                                <div class="projects_skills_right">
                                    <a href="https://www.sinocs.com.hk/" target="_blank" rel="noreferrer noopener"><img src={external_icon} alt="External" class="external"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    );
}
  

export default Projects;