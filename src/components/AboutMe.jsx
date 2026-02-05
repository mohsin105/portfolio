import React from 'react';
import fullStackIcon from '../assets/images/backend_1.png'
import frontendIcon from '../assets/images/frontend.png'
import backendIcon from '../assets/images/backend_2.png'
const AboutMe = () => {
    return (
        <div id='about_me' className='w-11/12 mx-auto my-10 flex flex-col md:flex-row gap-8 scroll-mt-16'>
            <div className="basis-1/2">
                <h2 className='text-3xl font-semibold my-4'>Area of Expertise </h2>
                <div className='border-l-4 border-red-400 p-4 rounded-md mb-4 flex gap-4'>
                    <div className='size-16 rounded-md'>
                        <img 
                            src={fullStackIcon} 
                            alt="fullStackIcon"
                            className='rounded-md' />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium'>Website Development</h3>
                        <p>End-to-end web apps, from idea to deployment</p>
                    </div>
                </div>
                <div className='border-l-4 border-red-400 p-4 rounded-md mb-4 flex gap-4 hover:bg-slate-800'>
                    <div className='size-16 rounded-md'>
                        <img 
                            src={backendIcon}
                            alt=""
                            className='rounded-md' />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium'>Backend Developent</h3>
                        <p>Secure APIs, business logic, and scalable data models</p>
                    </div>
                </div>
                <div className='border-l-4 border-red-400 p-4 rounded-md mb-2 flex gap-4'>
                    <div className='size-16 rounded-md'>
                        <img 
                            src={frontendIcon} 
                            alt="" 
                            className='rounded-md'/>
                    </div>
                    <div>
                        <h3 className='text-xl font-medium'>FrontEnd Development</h3>
                        <p>Responsive, accessible interfaces with modern React</p>
                    </div>
                </div>
            </div>
            <div className="basis-1/2  md:h-auto flex items-center">
                <div className='my-10 md:my-0'>
                    <h2 className='text-3xl font-semibold mb-4'>About Me:</h2>
                    <div>
                        <p className='text-lg'>I’m a backend-focused full-stack web developer based in Sylhet, Bangladesh, working primarily with Python and JavaScript. I enjoy building scalable APIs, clean user interfaces, and deploying applications on cloud platforms. I also like solving algorithmic problems in C and C++, with a strong focus on fundamentals and efficiency.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;