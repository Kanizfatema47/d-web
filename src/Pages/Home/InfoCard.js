import React from 'react';

const InfoCard = ({image , cardTitle, cardDes, bgClass}) => {
    return (
        <div className={`card card-side  shadow-xl ${bgClass} `}>
            <figure><img className=' lg:w-10/12 px-5  pl-2 pr-0' src={image} alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title lg:text-2xl sm:text-xl">{cardTitle}</h2>
                <p className='sm:text-lg'>{cardDes}</p>
                
            </div>
        </div>

        
    );
};

export default InfoCard;