import React from 'react';
import { FaDownload } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <div id='navBar' className='w-full  bg-slate-600 py-1 text-gray-100 '>
            <div className='w-11/12 mx-auto flex justify-between'>
                <div className=" font-semibold text-xl p-2 hover:bg-gray-800 rounded-sm flex items-center">
                    Mohsin
                </div>
                <div className=" basis-1/3">
                    <ul className='flex justify-around items-center py-2 md:py-0 gap-1 text-lg'>
                        <li className='  font-semibold '>
                            <a href="#about_me" className='p-1 md:p-2 hover:bg-slate-900 rounded-sm'>About</a>
                        </li>
                        <li className='font-semibold'>
                            <a href="#skills" className='p-1 md:p-2 hover:bg-slate-900 rounded-sm'>Skills</a>
                        </li>
                        <li className='font-semibold'>
                            <a href="#projects" className='p-1 md:p-2 hover:bg-slate-900 rounded-sm'>Projects</a>
                        </li>
                        <li className='font-semibold'>
                            <a href="#contact_me" className='p-1 md:p-2 hover:bg-slate-900 rounded-sm'>Contact</a>
                        </li>
                        <li className='p-1 md:p-2 font-semibold hover:bg-slate-900 rounded-sm flex items-center gap-1'>
                            <FaDownload  />
                            Resume
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;