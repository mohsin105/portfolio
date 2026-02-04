import React from 'react';
import backendIcon from '../assets/images/backend_1.png'
import frontendIcon from '../assets/images/frontend.png'
const AboutMe = () => {
    return (
        <div className='w-11/12 mx-auto my-10 flex flex-col md:flex-row'>
            <div className="basis-1/2">
                <h2 className='text-3xl font-semibold my-4'>Area of Expertise </h2>
                <div className='border-l-4 border-red-400 p-4 rounded-md mb-4 flex gap-4'>
                    <div className='size-16 rounded-md'>
                        <img 
                            src={backendIcon} 
                            alt=""
                            className='rounded-md' />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium'>Website Development</h3>
                        <p>End-to-end web apps, from idea to deployment</p>
                    </div>
                </div>
                <div className='border-l-4 border-red-400 p-4 rounded-md mb-4 flex gap-4'>
                    <div className='size-16 rounded-md'>
                        <img 
                            src={frontendIcon}
                            alt=""
                            className='rounded-md' />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium'>Backend Developent</h3>
                        <p>Secure APIs, business logic, and scalable data models</p>
                    </div>
                </div>
                <div className='border-l-4 border-red-400 p-4 rounded-md mb-2'>
                    <h3 className='text-xl font-medium'>FrontEnd Development</h3>
                    <p>Responsive, accessible interfaces with modern React</p>
                </div>
            </div>
            <div className="basis-1/2  md:h-auto flex items-center">
                <div className='my-10 md:my-0'>
                    <h2 className='text-3xl font-semibold '>About Me:</h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officia alias veniam ex asperiores fugit commodi non reiciendis tenetur modi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;