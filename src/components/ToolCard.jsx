import React from 'react';

const ToolCard = ({tool}) => {
    return (
        <div className='p-4 bg-sky-700 text-gray-200 font-bold text-xl rounded-md w-2/3 flex justify-center items-center gap-2'>
            <div className='text-2xl'>{tool.icon}</div>
            {tool.name}
        </div>
    );
};

export default ToolCard;