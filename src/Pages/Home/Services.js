import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nam.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nam.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nam.',
            img: whitening
        },
    ];
    return (
        <div className='mx-24 mb-32'>
            <div className="section-title">
                <h1 className='lg:text-5xl font-bold text-accent text-center sm:text-2xl'>Our Services</h1>
                <h3 className='lg:text-2xl text-accent text-center my-12 mg:text-xl'>Services we provide</h3>
            </div>
            <div className="grid lg:grid-cols-3 gap-15 sm:grid-cols-1 mx-0 gap-5">
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}>

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;