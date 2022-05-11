import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='lg:mx-24 mb-32 '>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-8 '>
                <InfoCard cardTitle='Opening Hours' cardDes='Lorem Ipsum is simply dummy text of the pri' bgClass='bg-gradient-to-l from-primary to-secondary text-white ' image={clock}></InfoCard>
                <InfoCard cardTitle='Visit our location' cardDes='Brooklyn, NY 10036, United States' bgClass='bg-accent text-white' image={location}></InfoCard>
                <InfoCard cardTitle='Contact us now' cardDes='+000 123 456789' bgClass='bg-gradient-to-l from-primary to-secondary text-white' image={phone}></InfoCard>
            </div>
        </div>
    );
};

export default Info;