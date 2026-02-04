import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';

const Home = () => {
    return (
        <div className='bg-slate-900 text-slate-100'>
            <nav className='sticky top-0'>
                <Navbar/>
            </nav>
            {/* <h1>WelCome To Portfolio Website</h1> */}
            <section>
                <HeroSection/>
            </section>
            <div>
                <AboutMe/>
            </div>
            <div>
                <Skills/>
            </div>
            <section>
                <Projects/>
            </section>
            <section>
                <ContactMe/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Home;