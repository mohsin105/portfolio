import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa6';
import { FiXCircle } from 'react-icons/fi';
import { TbBaselineDensitySmall } from 'react-icons/tb';

const Navbar = () => {
    const [sideBarOpen , setSideBarOpen] = useState(false);
    useEffect(()=>{
        console.log(sideBarOpen);
    },[sideBarOpen])
    return (
        <div id='navBar' className='w-full  bg-slate-600 py-1 text-gray-100'>
            <div className='w-11/12 mx-auto flex justify-between'>
                <div className=" font-semibold text-xl p-2 hover:bg-gray-800 rounded-sm flex items-center">
                    Mohsin
                </div>
                <div className="hidden md:block basis-1/3">
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
                        <li className='p-1 md:p-2 font-semibold hover:bg-slate-900 rounded-sm '>
                            <a 
                                // href="/public/phitron_certificate.pdf"
                                href="#"
                                // download="cv_mohsin_ibn_aftab.pdf"
                                className='flex items-center gap-1'>
                                <FaDownload  />
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
                {sideBarOpen? (
                    <div id='sideBar' className={`absolute right-0 top-0 h-screen min-w-fit w-3/4 p-2 ${(sideBarOpen)? "block" : "hidden" } bg-gray-950/90`}>
                        <div className='flex justify-end my-4'>
                            <FiXCircle className='text-4xl font-bold cursor-pointer' onClick={() => setSideBarOpen(false)} />
                        </div>
                        <ul className='font-semibold text-2xl flex flex-col space-y-1'>
                            <li className='p-4 bg-gray-800 hover:bg-gray-700 rounded-md'>
                                <a href="#about_me" className='block' onClick={() => setSideBarOpen(false)}>About</a>
                            </li>
                            <li className='p-4 bg-gray-800 hover:bg-gray-700 rounded-md'>
                                <a href="#skills" className='block' onClick={() => setSideBarOpen(false)}>Skills</a>
                            </li>
                            <li className='p-4 bg-gray-800 hover:bg-gray-700 rounded-md'>
                                <a href="#projects" className='block' onClick={() => setSideBarOpen(false)}>Projects</a>
                            </li>
                            <li className='p-4 bg-gray-800 hover:bg-gray-700 rounded-md'>
                                <a href="#contact_me" className='block' onClick={()=> setSideBarOpen(false)}>Contact</a>
                            </li>
                            <li className='p-4 bg-gray-800 hover:bg-gray-700 rounded-md  '>
                                <a 
                                    // href="/public/phitron_certificate.pdf"
                                    href="#"
                                    // download="cv_mohsin_ibn_aftab.pdf"
                                    className='flex items-center gap-4'>

                                    <FaDownload  />
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : (

                    <div className='md:hidden flex items-center cursor-pointer hover:bg-gray-700 px-1 rounded-md'>
                        <TbBaselineDensitySmall className='text-2xl' onClick={() => setSideBarOpen(true)}/>
                    </div>
                )}
                
            </div>
        </div>
    );
};

export default Navbar;