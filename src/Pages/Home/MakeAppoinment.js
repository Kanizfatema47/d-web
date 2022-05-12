import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png'


const MakeAppoinment = () => {
    return (
        <section style={{ background: `url(${bg})` }} className='lg:my-52 sm:mt-64'>
            <div class="hero lg:min-h-screen sm:max-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center w-1/2 my-16 text-white lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class=" hidden  lg:block">

                        <img src={doctor} alt="" className='mt-[-200px]' />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;