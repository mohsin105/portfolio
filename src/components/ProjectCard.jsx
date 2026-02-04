import React from 'react';
import { FaLink, FaServer } from 'react-icons/fa6';

const ProjectCard = ({project}) => {
    return (
        <div className='w-full p-4 bg-slate-800/80 hover:bg-slate-800/50 rounded-lg shadow-2xl'>
            <div className=' bg-violet-400 rounded-lg '>
                <img 
                    src={project.image} 
                    alt="project_img"
                    className='rounded-lg' />
            </div>
            <div className='p-2'>
                <h3 className='text-xl font-bold my-2'>{project.title}</h3>
                <p className='text-base'>{project.details}</p>
                <div className='flex flex-wrap gap-4 my-4'>
                    {project.tech_stack.map((tool , indx) => (
                        <div key={indx} className='p-2 rounded-md bg-cyan-300 font-semibold text-base'>
                            {tool}
                        </div>
                    ))}
                </div>
                <div className='font-semibold '>
                    <div className="flex gap-4 ">
                        <a 
                            href={project.frontend_live_link} 
                            className='flex gap-0.5 items-center p-2 px-4 bg-slate-500 hover:bg-indigo-700 rounded-lg'>
                            <FaLink />
                            Live
                        </a>
                        {project.backend_live_link && (
                            <a 
                                href={project.backend_live_link} 
                                className='flex gap-0.5 items-center p-2 px-4 bg-slate-500 hover:bg-indigo-700 rounded-lg'>
                                <FaServer />
                                API
                            </a>
                        )}
                    </div>
                    <div className='mt-4 flex gap-4 items-center'>
                        <p>Github : </p>
                        <div className='flex gap-4 '>

                            {project.frontend_github && (
                                <a 
                                    href={project.frontend_github}
                                    className='p-2 px-4 bg-slate-500 hover:bg-slate-600 rounded-lg'>
                                        Frontend
                                </a>
                            )}
                            <a 
                                href={project.backend_github}
                                className='p-2 px-4 bg-slate-500 hover:bg-slate-600 rounded-lg'>
                                {project.frontend_github? 'Backend' : 'Code-Base'}
                            </a>
                        </div>
                    </div>
                    <a href=""></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;