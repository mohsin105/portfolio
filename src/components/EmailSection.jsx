import React from 'react';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';

const EmailSection = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data) =>{
        console.log(data);
    }
    return (
        <div>
            <div className='w-full md:w-3/4 mx-auto p-8 bg-slate-800 rounded-lg'>
                <h3 className='text-2xl font-semibold text-center mb-4'>Email Instantly:</h3>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="" className='text-lg font-bold'>Your Email Address</label>
                        <input 
                            {...register('email')}
                            type="text"
                            placeholder='Your Email Address'
                            className='w-full p-4 my-4 bg-slate-700/50 border border-gray-400 rounded-md' />
                    </div>
                    <div>
                        <label htmlFor="" className='text-lg font-bold'>Message</label>
                        <textarea 
                            {...register('content')}
                            type="textarea"
                            placeholder='Your Message'
                            className='textarea w-full p-4 my-4 bg-slate-700/50 border border-gray-400 rounded-md'
                            rows={8} />
                    </div>
                    <button 
                        type='submit'
                        className='w-full p-4 bg-green-400 hover:bg-green-500 text-xl font-bold rounded-md flex items-center justify-center gap-4'>
                        Send Message
                        <FiSend className='text-xl' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EmailSection;