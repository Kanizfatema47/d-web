import React from 'react';
import treatment from '../../assets/images/treatment.png'
import ButtonLink from './ButtonLink';
const Treatment = () => {
    return (
        <div className='max-h-screen lg:mx-32'>
            <div className="hero ">
                <div className="hero-content flex-col justify-evenly lg:flex-row">
                    <img src={treatment} className='rounded lg:w-4/12 ' alt='' />
                    <div className='lg:w-2/4 sm:w-10/12 mt-10'>
                        <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-accent text-base  lg:w-10/12 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonLink>Get Started</ButtonLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;