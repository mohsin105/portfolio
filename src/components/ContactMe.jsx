import React from 'react';
import EmailSection from './EmailSection';
import { BiLogoGmail } from 'react-icons/bi';
import { FaDiscord, FaFacebook, FaGithub, FaWhatsapp } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import { ImLinkedin } from 'react-icons/im';

const ContactMe = () => {
    return (
        <div id='contact_me' className='w-11/12 mx-auto text-white my-10 scroll-mt-16'>
            <h2 className='text-4xl font-bold mb-4'>Contact Me: </h2>
            <div className=' flex flex-col md:flex-row gap-16 md:gap-0 '>
                <div className="basis-1/2  py-4">
                    <p className='text-xl font-semibold mb-4'>Have Project? Or Anything to talk about Software and Problem Solving</p>
                    <p className='text-lg font-semibold mb-4'>Let's Get In Touch</p>
                    <div>
                        <a 
                            href="mailto:mohsinibnaftab@gmail.com" 
                            className='flex items-center justify-between min-w-fit w-1/2 gap-4 text-xl p-4 py-4 rounded-md bg-slate-600/50 hover:scale-105'>
                            <BiLogoGmail className='text-3xl border-2 rounded-md '/>
                            mohsinibnaftab@gmail.com
                        </a>
                        
                    </div>
                    <div className='my-4'>
                        <a 
                            href="https://github.com/mohsin105"
                            className='flex justify-between w-64 p-4 bg-gray-800 rounded-md hover:scale-105'>
                            <p className='flex items-center gap-4'>
                                <FaGithub className="text-2xl inline" />
                                <p className='font-bold'>Github</p>
                            </p>
                            <p className='p-2 bg-gray-600 rounded-md'>/mohsin105</p>
                        </a>
                        
                    </div>
                    <div className='my-4 '>
                        <a 
                            href="https://www.linkedin.com/in/mohsinibnaftab/"
                            className='flex justify-between min-w-fit gap-4 w-64 p-4 bg-gray-800 rounded-md hover:scale-105'>
                            <p className='flex items-center gap-4'>
                                <ImLinkedin  className="text-2xl inline" />
                                <p className='font-bold'>LinkedIn</p>
                            </p>
                            <p className='p-2 bg-gray-600 rounded-md'>/mohsinibnaftab</p>
                        </a>
                        
                    </div>
                    
                    <h6 className='font-bold text-2xl my-4'>Find Me in Social media</h6>    
                    <div className='flex gap-8 text-3xl'>
                        <a href="mohsin2185" >
                            <FaDiscord  className='hover:scale-110 hover:text-violet-400'/>
                        </a>
                        <a href="https://www.facebook.com/mohsin8824">
                            <FaFacebook  className='hover:scale-110 hover:text-blue-600'/>
                        </a>
                        
                        <a href="https://x.com/AftabIbn">
                            <BsTwitterX className='hover:scale-110 hover:text-blue-800'/>
                        </a>
                        <a href="https://leetcode.com/u/mohsin1950/">
                            <SiLeetcode className='hover:scale-110 hover:text-violet-400'/>
                        </a>
                        <a href="https://leetcode.com/u/mohsin1950/">
                            
                            <FaWhatsapp className='hover:scale-110 hover:text-green-400'/>
                        </a>
                    </div>
                </div>
            <div className="basis-1/2">
                <EmailSection/>
            </div>
            
            </div>
        </div>
    );
};

export default ContactMe;