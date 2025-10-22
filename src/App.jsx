import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarComponent from './components/Navbar';  // Fixed import
import Banner from   './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Experience from './components/Experience';
import Footer from './components/Footer';
import "./index.css"
function App() {
    return (
        <>
            <NavbarComponent />
            <Banner/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;
