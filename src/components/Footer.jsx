import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub, FaRegCopyright } from 'react-icons/fa6';
import { IoHome } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className='w-full bg-slate-700 text-gray-100 p-8 '>
            <div className='text-base'>
                <h4 className=''>Md. Mohsin Ibn Aftab</h4>
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