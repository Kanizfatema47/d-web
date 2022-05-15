import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png'
import ButtonLink from './ButtonLink';


const MakeAppoinment = () => {
    return (
        <section style={{ background: `url(${bg})` }} className='lg:my-52 sm:mt-64'>
            <div className="hero lg:min-h-screen sm:max-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/2 my-16 text-white lg:text-left">
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonLink>Get Started</ButtonLink>
                    </div>
                    <div className=" hidden  lg:block">

                        <img src={doctor} alt="" className='mt-[-150px]' />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;