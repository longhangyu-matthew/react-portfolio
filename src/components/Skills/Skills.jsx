import "./Skills.css";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import html_icon from "../../assets/icons/html_icon.svg";
import css_icon from "../../assets/icons/css_icon.svg";
import bootstrap_icon from "../../assets/icons/bootstrap_icon.svg";
import javascript_icon from "../../assets/icons/javascript_icon.svg";
import jquery_icon from "../../assets/icons/jquery_icon.svg";
import react_icon from "../../assets/icons/react_icon.svg";
import php_icon from "../../assets/icons/php_icon.svg";
import shopify_icon from "../../assets/icons/shopify_icon.svg";
import klaviyo_icon from "../../assets/icons/klaviyo_icon.svg";
import photoshop_icon from "../../assets/icons/photoshop_icon.svg";
import illustrator_icon from "../../assets/icons/illustrator_icon.svg";
import unity_icon from "../../assets/icons/unity_icon.svg";
import blender_icon from "../../assets/icons/blender_icon.svg";

function Skills() {
    const state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1000: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    }
    return (
        <section id="skills" class="">
            <div class="container skills_container">
                <div>
                    <h2>Skills</h2>
                    <div class="typewritter skills">
                        <p>skills i have acquired so far.</p>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <OwlCarousel className='owl-theme skills_slider' loop margin={20} stagePadding={45} autoplay={true} autoplayTimeout={3000} autoplayHoverPause={true} dots={false} responsive={state.responsive}>
                        <div class='item'>
                            <div class='item_block'>
                                <div class="icon"><img src={html_icon} alt="HTML" class="html"/></div>
                                <div class="name"><h4>HTML</h4></div>
                                <div class="level prof">Proficient</div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class='item_block'>
                                <div class="icon"><img src={css_icon} alt="CSS" class="css"/></div>
                                <div class="name"><h4>CSS</h4></div>
                                <div class="level prof">Proficient</div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class='item_block'>
                                <div class="icon"><img src={bootstrap_icon} alt="Bootstrap" class="bootstrap"/></div>
                                <div class="name"><h4>Bootstrap</h4></div>
                                <div class="level prof">Proficient</div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class='item_block'>
                                <div class="icon"><img src={javascript_icon} alt="JavaScript" class="javascript"/></div>
                                <div class="name"><h4>JavaScript</h4></div>
                                <div class="level inter">Intermediate</div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class='item_block'>
                                <div class="icon"><img src={jquery_icon} alt="jQuery" class="jquery"/></div>
                                <div class="name"><h4>jQuery</h4></div>
                                <div class="level prof">Proficient</div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class='item_block'>
                                <div class="icon"><img src={react_icon} alt="React" class="react"/></div>
                                <div class="name"><h4>React</h4></div>
                                <div class="level jun">Junior</div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class='item_block'>
                                <div class="icon"><img src={php_icon} alt="PHP" class="php"/></div>
                                <div class="name"><h4>PHP</h4></div>
                                <div class="level inter">Intermediate</div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class='item_block'>
                                <div class="icon"><img src={shopify_icon} alt="Shopify" class="shopify"/></div>
                                <div class="name"><h4>Shopify</h4></div>
                                <div class="level prof">Proficient</div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class='item_block'>
                                <div class="icon"><img src={klaviyo_icon} alt="Klaviyo" class="klaviyo"/></div>
                                <div class="name"><h4>Klaviyo</h4></div>
                                <div class="level prof">Proficient</div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class='item_block'>
                                <div class="icon"><img src={photoshop_icon} alt="PhotoShop" class="photoshop"/></div>
                                <div class="name"><h4>Photoshop</h4></div>
                                <div class="level prof">Proficient</div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class='item_block'>
                                <div class="icon"><img src={illustrator_icon} alt="Illustrator" class="illustrator"/></div>
                                <div class="name"><h4>Illustrator</h4></div>
                                <div class="level prof">Proficient</div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class='item_block'>
                                <div class="icon"><img src={unity_icon} alt="Unity" class="unity"/></div>
                                <div class="name"><h4>Unity</h4></div>
                                <div class="level inter">Intermediate</div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class='item_block'>
                                <div class="icon"><img src={blender_icon} alt="Blender" class="blender"/></div>
                                <div class="name"><h4>Blender</h4></div>
                                <div class="level inter">Intermediate</div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
}
  

export default Skills;