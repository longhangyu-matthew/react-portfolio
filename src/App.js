import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Part from "./components/Part/Part";

function App() {
  return (  
      <>
        <Header />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Part />
      </>
  );
}

export default App;
