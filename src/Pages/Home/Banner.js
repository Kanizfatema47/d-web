import React from 'react';
import bannerimg from '../../assets/images/chair.png'
const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerimg} alt=''class="max-w-xl rounded-lg shadow-2xl"/>
                    <div>
                        <h1 class="text-5xl font-bold text-accent ">Your New Smile Starts Here</h1>
                        <p class="py-6 w-10/12 text-accent text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <button class="btn bg-gradient-to-l from-primary to-secondary text-white border-none text-sm">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;