import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const HeroSection = () => {
    return (
        <div id="top" className='w-full h-screen md:h-[70vh] bg-linear-to-br from-slate-800 via-violet-900/30 to-slate-950 text-gray-100 scroll-mt-16'>
            <div className='w-11/12 mx-auto flex flex-col md:flex-row h-full'>
                <div className='basis-1/2 h-[80vh] md:h-full flex items-center'>
                    <div>
                        <h3 className="text-lg font-semibold">Welcome, I'm</h3>
                        <h1 className='text-5xl font-semibold my-4'>Md. Mohsin Ibn Aftab</h1>
                        <h2 className='text-2xl mb-4'>Full-Stack Developer · Python | JavaScript</h2>
                        {/* <h3 className="text-xl ">Building scalable web applications with Python, JavaScript, and cloud infrastructure</h3> */}
                        <div className='flex gap-4 font-semibold'>
                            <button className=''>
                                <a href="https://www.linkedin.com/in/mohsinibnaftab/" className='px-4 py-2 bg-sky-700 rounded-md hover:bg-sky-800 flex items-center gap-2'>
                                    <ImLinkedin  className="text-2xl inline" />
                                    LinkedIn
                                </a>
                            </button>
                            <button className=''>
                                <a href="https://github.com/mohsin105" className='px-4 py-2 bg-sky-600 rounded-md hover:bg-gray-800 flex items-center gap-2'>
                                    <FaGithub className="text-2xl inline" />
                                    Github
                                </a>
                            </button>
                            
                        </div>
                    </div>
                </div>
                <div className='basis-1/2 p-4 h-full w-full flex items-center justify-center'>
                    <div 
                        className='bg-slate-600 rounded-md w-2/3  h-11/12 ring-4 ring-violet-500/50 ring-offset-4 ring-offset-indigo-900/50'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;