import React from 'react';

const ToolCard = ({tool}) => {
    return (
        <div className='p-4 bg-linear-to-br from-sky-900 to-indigo-600/60 text-gray-100 font-bold text-xl border-violet-600/50 border-4 rounded-md min-w-fit w-2/3 flex justify-center items-center gap-2'>
            <div className='text-2xl'>{tool.icon}</div>
            {tool.name}
        </div>
    );
};

export default ToolCard;