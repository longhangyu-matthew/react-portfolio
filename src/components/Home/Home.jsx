import "./Home.css";
import React, { useEffect, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

function Home() {
    useEffect(()=> {
        AOS.init({duration: 1000})
    }, []);
    return (
        <section id="home" class="">
            <div class="container home_container">
                <div class="home_left">
                    <div class="">
                        <h5>Hello! I'm</h5>
                        <h1>Matthew Yu</h1>
                        <h3>Web & Shopify Developer</h3>
                        <a href="#projects" class="button projects">My Projects</a>
                    </div>  
                </div>
                <div class="home_right">
                    <Suspense fallback={<div class="suspense_loading"></div>}>
                        <Spline scene="https://prod.spline.design/Vd6Wx1YGG9Lkkjfa/scene.splinecode" />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
  

export default Home;