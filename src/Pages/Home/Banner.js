import React from 'react';
import bannerimg from '../../assets/images/chair.png'
import ButtonLink from './ButtonLink';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen mb-24">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={bannerimg} alt=''className="lg:w-1/2 rounded-lg shadow-2xl sm:w-full"/>
                    <div className=''>
                        <h1 className="text-5xl font-bold text-accent ">Your New Smile Starts Here</h1>
                        <p className="py-6 text-accent text-base  lg:w-10/12 sm:w-11/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <ButtonLink>Get Started</ButtonLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;