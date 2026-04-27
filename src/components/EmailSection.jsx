import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';

const EmailSection = () => {
    const {register, handleSubmit, reset,formState:{errors, isSubmitting, isSubmitSuccessful}} = useForm();
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const onSubmit = async(data) =>{
        console.log(data);
        try {
            const response = await fetch("https://formspree.io/f/xrervydd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body:JSON.stringify(data)
            })
            if(response.ok)
            {
                setSuccessMessage("Message Sent Succesffully. I will reach out soon!!!");
                reset();
            }
            else{
                setErrorMessage("Something went wrong");
            }
        } catch (error) {
            console.log(error);
            setErrorMessage("Network Error!!");
        }
    }
    return (
        <div>
            <div className='w-full md:w-3/4 mx-auto p-8 bg-slate-800 rounded-lg'>
                <h3 className='text-2xl font-semibold text-center mb-4'>Email Instantly:</h3>
                {successMessage && (
                    <div className='text-base text-black font-semibold p-2 bg-cyan-300 rounded-md my-2'>
                        {successMessage}
                    </div>
                )}
                {errorMessage && (
                    <div className='text-base text-black font-semibold p-2 bg-rose-300 rounded-md my-2'>
                        {errorMessage}
                    </div>
                )}
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="" className='text-lg font-bold'>Your Email Address</label>
                        <input 
                            {...register('email', {
                                required:"Email is required!!!"
                            })}
                            type="email"
                            placeholder='Your Email Address'
                            className='w-full p-4 my-4 bg-slate-700/50 border border-gray-400 rounded-md' />
                        {errors.email && (<p className='bg-rose-500 p-1 rounded-sm my-1'>{errors.email.message}</p>)}
                    </div>
                    <div>
                        <label htmlFor="" className='text-lg font-bold'>Message</label>
                        <textarea 
                            {...register('content', {
                                required:'Please fill out this field!!!'
                            })}
                            type="textarea"
                            placeholder='Your Message'
                            className='textarea w-full p-4 my-4 bg-slate-700/50 border border-gray-400 rounded-md'
                            rows={8} />
                        {errors.content && (<p className='bg-rose-500 p-1 rounded-sm my-1'>{errors.content.message}</p>)}
                    </div>
                    {/* Honeypot field to stop basic bots */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} />
                    <button 
                        type='submit'
                        disabled={isSubmitting || isSubmitSuccessful}
                        className='w-full p-4 bg-green-400 hover:bg-green-500 text-xl font-bold rounded-md flex items-center justify-center gap-4'>
                        {isSubmitting? 'Sending...' :isSubmitSuccessful? 'Sent Successfully' : 'Send Message'}
                        <FiSend className='text-xl' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EmailSection;