import React from 'react';
import ToolCard from './ToolCard';
import { FaGithub, FaHtml5, FaPython, FaReact } from 'react-icons/fa';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoCss3 } from 'react-icons/io';
import { SiDjango, SiNotion } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';
import { FaAws, FaGitAlt } from 'react-icons/fa6';

const Skills = () => {
    const frontEnd_tools = [
        {
            'icon':<RiJavascriptFill />,
            'name':'JavaScript'
        },
        {
            'icon':<FaReact />,
            'name':'React'
        },
        {
            'icon':<FaHtml5 />,
            'name':'HTML'
        },
        {
            'icon':<IoLogoCss3 />,
            'name':'CSS'
        },
        {
            'icon':<RiTailwindCssFill />,
            'name':'Tailwind'
        },

    ]

    const backend_tools = [
        {
            'icon' : <FaPython />,
            'name' :'Python'
        },
        {
            'icon' : <SiDjango />,
            'name' :'Django'
        },
        {
            'icon' : <BiLogoPostgresql />,
            'name' :'PostgresQL'
        },
        {
            'icon' : <GrMysql />,
            'name' :'MySQL'
        },
        {
            'icon' : <FaAws />,
            'name' :'AWS'
        },
    ]

    const tools = [
        {
            'icon':<FaGitAlt />,
            'name':'Git'
        },
        {
            'icon':<FaGithub />,
            'name':'Github'
        },
        {
            'icon':<SiNotion />,
            'name':'Notion'
        },
    ]

    return (
        <div id='skills' className='w-11/12 mx-auto scroll-mt-16'>
            <h2 className='text-4xl font-bold'>Skills:</h2>
            <div className='my-8'>
                <h3 className='font-bold text-xl mb-4'>FrontEnd</h3>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
                    {frontEnd_tools.map((tool,indx) => (
                        <ToolCard key={indx} tool={tool} />
                    ))}
                </div>
            </div>
            <div className="mb-8">
                <h3 className='font-bold text-xl mb-4'>Backend</h3>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
                    {backend_tools.map((tool, indx) => (
                        <ToolCard key={indx} tool={tool}/>
                    ))}
                </div>
            </div>
            <div className="mb-8">
                <h3 className='font-bold text-xl mb-4'>Tools</h3>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
                    {tools.map((tool, indx) => (
                        <ToolCard key={indx} tool={tool} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;