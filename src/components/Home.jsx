import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const Home = () => {
    return (
        <div className='bg-slate-900 text-slate-100'>
            <nav className='sticky top-0'>
                <Navbar/>
            </nav>
            {/* <h1>WelCome To Portfolio Website</h1> */}
            <section className=''>
                <HeroSection/>
            </section>
            <div >
                <AboutMe/>
            </div>
            <div>
                <Skills/>
            </div>
            <section className=''>
                <Projects/>
            </section>
            <section className='scroll-mt-16'>
                <ContactMe/>
            </section>
            <footer>
                <Footer/>
            </footer>
            <div className='fixed right-4 bottom-4 '>
                <a href="#top">
                    <IoIosArrowDropupCircle className='text-5xl text-yellow-600 hover:text-yellow-900 font-extrabold '/>
                </a>
            </div>
        </div>
    );
};

export default Home;