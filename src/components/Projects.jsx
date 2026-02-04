import React from 'react';
import ProjectCard from './ProjectCard';
import whistleCover from '../assets/images/whistle_home.png'
import eventumCover from '../assets/images/eventum_cover.png'
const Projects = () => {
    const projects_details = [
        {
            'image' :whistleCover,
            'title' : 'Whistle',
            'details':'A Social Media Platform ,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde expedita voluptatibus eveniet nisi nobis excepturi consequatur ipsum quam nesciunt labore?',
            'tech_stack':[
                'React', 'Django-DRF' , 'PostgresQL' , 'TailwindCSS'
            ],
            'frontend_live_link' :'https://whistle-client-eosin.vercel.app/',
            'backend_live_link' : 'https://whistle-pi.vercel.app/api/v1/',
            'frontend_github': 'https://github.com/mohsin105/whistle-client',
            'backend_github' :'https://github.com/mohsin105/whistle',
        },
        {
            'image' : eventumCover,
            'title' : 'Eventum',
            'details' : 'A Smart Event Management System Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde expedita voluptatibus eveniet nisi nobis excepturi consequatur ipsum quam nesciunt labore?',
            'tech_stack' : [
                'Django-MVT' , 'PostgresQL' , 'TailwindCSS'
            ],
            'frontend_live_link' : 'https://event-management-django-omfl.onrender.com/',
            'backend_live_link' : '',
            'frontend_github' : '',
            'backend_github' : 'https://github.com/mohsin105/event_management_django'
        }
    ];

    return (
        <div className='w-11/12 mx-auto my-8'>
            <h2 className='text-4xl font-bold my-4 text-center'>Features Projects:</h2>
            <h4 className='text-xl font-bold  text-center text-slate-400'>Real-world projects showcasing practical full-stack skills</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-10'>
                {projects_details.map((project , indx) => (
                    <ProjectCard key={indx} project={project} />
                ))}
            </div>
        </div>
        
    );
};

export default Projects;