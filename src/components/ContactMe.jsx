import React from 'react';
import EmailSection from './EmailSection';
import { BiLogoGmail } from 'react-icons/bi';
import { FaDiscord, FaFacebook } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const ContactMe = () => {
    return (
        <div className='w-11/12 mx-auto text-white'>
            <h2 className='text-4xl font-bold'>Contact Me: </h2>
            <div className=' flex flex-col md:flex-row my-10'>
            <div className="basis-1/2  py-4">
                <p className='text-xl font-semibold mb-4'>Have Project? Or Anything to talk about Software and Problem Solving</p>
                <div>
                    <a href="" className='flex items-center min-w-fit w-1/2 gap-4 text-xl p-2 py-4 rounded-md bg-slate-600/50'>
                        <BiLogoGmail className='text-2xl border-2 rounded-md '/>
                        mohsinibnaftab@gmail.com
                    </a>
                    
                </div>
                <div>
                    <a href="">
                        Github
                    </a>
                    
                </div>
                <div>
                    <a href="">
                        LinkedIn
                    </a>
                </div>
                <h6 className='font-bold text-2xl my-4'>Find Me in Social media</h6>    
                <div className='flex gap-4 text-2xl'>
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