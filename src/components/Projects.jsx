import React from 'react';
import ProjectCard from './ProjectCard';
import whistleCover from '../assets/images/whistle_home.png'
import eventumCover from '../assets/images/eventum_cover.png'
const Projects = () => {
    const projects_details = [
        {
            'image' :whistleCover,
            'title' : 'Whistle',
            'details':'A modern social media application designed to connect users through shared moments. It supports secure authentication with email verification, media-rich posts, interactive likes and comments, user dashboards, and public feeds. The platform is architected with scalability, extensibility, and real-world production practices in mind.',
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
            'details' : 'A Smart Event Management System.  A scalable web platform designed to streamline event organization and participation for communities and institutions. It enables secure user onboarding, organizer-led event management, controlled registrations, and centralized administrative oversight, with a strong focus on reliability, access control, and maintainable system design.',
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
        <div id='projects' className='w-11/12 mx-auto my-12 scroll-mt-16'>
            <h2 className='text-4xl font-bold my-4 text-center'>Featured Projects:</h2>
            <h4 className='text-xl font-bold  text-center text-slate-400'>Real-world projects showcasing practical full-stack skills</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 my-10'>
                {projects_details.map((project , indx) => (
                    <ProjectCard key={indx} project={project} />
                ))}
            </div>
        </div>
        
    );
};

export default Projects;