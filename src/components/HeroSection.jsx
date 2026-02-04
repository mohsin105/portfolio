import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const HeroSection = () => {
    return (
        <div className='w-full h-screen md:h-[70vh] bg-gray-100 text-black'>
            <div className='w-11/12 mx-auto flex flex-col md:flex-row h-full'>
                <div className='basis-1/2 h-[80vh] md:h-full flex items-center'>
                    <div>
                        <h1 className='text-5xl font-semibold my-4'>Md. Mohsin Ibn Aftab</h1>
                        <h2 className='text-xl mb-4'>Software Developer | Programmer</h2>
                        <div className='flex gap-4'>
                            <button className=''>
                                <a href="https://www.linkedin.com/in/mohsinibnaftab/" className='px-4 py-2 bg-sky-500 rounded-md hover:bg-sky-700 flex items-center gap-2'>
                                    <ImLinkedin  className="text-2xl inline" />
                                    LinkedIn
                                </a>
                            </button>
                            <button className=''>
                                <a href="https://github.com/mohsin105" className='px-4 py-2 bg-sky-500 rounded-md hover:bg-sky-700 flex items-center gap-2'>
                                    <FaGithub className="text-2xl inline" />
                                    Github
                                </a>
                            </button>
                            
                        </div>
                    </div>
                </div>
                <div className='basis-1/2 p-4 h-full w-full'>
                    <div className='bg-slate-600 rounded-md w-full h-full'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;