
import React from 'react';
import Image from 'next/image';

const Selection = ({ icon, name, description, background, large }) => {
    return (
        <div className='project'>
            { icon && <Image className='image' src={icon}height={40} width={40}></Image>}
            <p className='title'>{name}</p>
            <p className='title sub'>{description}</p>
            
            { background && 
                <div className='background'>
                    <Image className='background-image' src={ background ?? 'https://media.discordapp.net/attachments/965146501720440878/967325101638950952/unknown.png'} fill={true}></Image>
                </div>
            }
                
        </div>
    );
};

export default Selection;