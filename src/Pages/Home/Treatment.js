import React from 'react';
import treatment from '../../assets/images/treatment.png'
import Button from './Button';
const Treatment = () => {
    return (
        <div className='max-h-screen lg:mx-32'>
            <div class="hero ">
                <div class="hero-content flex-col justify-evenly lg:flex-row">
                    <img src={treatment} className='rounded lg:w-4/12 ' alt='' />
                    <div className='lg:w-2/4 sm:w-10/12 mt-10'>
                        <h1 class="text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6 text-accent text-base  lg:w-10/12 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;