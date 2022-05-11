import React from 'react';
import bannerimg from '../../assets/images/chair.png'
const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen mb-24">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    <img src={bannerimg} alt=''class="lg:w-1/2 rounded-lg shadow-2xl sm:w-full"/>
                    <div className=''>
                        <h1 class="text-5xl font-bold text-accent ">Your New Smile Starts Here</h1>
                        <p class="py-6 text-accent text-base  lg:w-10/12 sm:w-11/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <button class="btn bg-gradient-to-l from-primary to-secondary uppercase text-white border-none text-sm">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;