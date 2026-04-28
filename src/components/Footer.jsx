import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub, FaRegCopyright } from 'react-icons/fa6';
import { IoHome } from 'react-icons/io5';
import logo from '../assets/images/M_logo.jpg'
const Footer = () => {
    return (
        <div className='w-full bg-slate-700 text-gray-100 p-8 pb-4 '>
            <div className='text-base'>
                <div className='flex space-x-4'>
                    <div className='size-8'>
                        <img 
                            src={logo}
                            alt="" />
                    </div>
                    <h4 className='text-lg mb-2 font-semibold'>Looking forward to working with you</h4>
                </div>
                <h4 className='text-xl mb-2'>Md. Mohsin Ibn Aftab</h4>
                <div className='flex gap-2 '>
                    <IoHome  className='text-xl'/>
                    <p>Sylhet, Bangladesh</p>
                </div>
            </div>
            <div className='border-t-2 border-gray-300 flex justify-center gap-4 pt-4 my-4'>
                <a href="https://www.facebook.com/mohsin8824">
                    <FaFacebook className='text-xl' />
                </a>
                <a href="https://x.com/AftabIbn">
                    <BsTwitterX className='text-xl' />
                </a>
                <a href="https://github.com/mohsin105">
                    <FaGithub className='text-xl'/>
                </a>
            </div>
            <div className='flex justify-center items-center'>
                <FaRegCopyright className=''/>
                <p>2026 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;