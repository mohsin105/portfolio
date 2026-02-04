import React from 'react';
import { FaDownload } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <div className='w-full  bg-slate-500 p-2 text-gray-100 '>
            <div className='w-11/12 mx-auto flex justify-between'>
                <div className="p-1 font-semibold text-lg hover:bg-gray-800 rounded-sm flex items-center">
                    Mohsin
                </div>
                <div className=" basis-1/3">
                    <ul className='flex justify-around gap-1'>
                        <li className='p-1 font-semibold hover:bg-slate-900 rounded-xs'>About</li>
                        <li className='p-1 font-semibold hover:bg-slate-900 rounded-xs'>Skills</li>
                        <li className='p-1 font-semibold hover:bg-slate-900 rounded-xs'>Project</li>
                        <li className='p-1 font-semibold hover:bg-slate-900 rounded-xs'>Contact</li>
                        <li className='p-1 font-semibold hover:bg-slate-900 rounded-xs flex items-center gap-1'>
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