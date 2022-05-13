import React from 'react';
import bg from '../../assets/images/appointment.png'
import ButtonLink from './ButtonLink';
const ContactUs = () => {
    return (
        <div class="hero lg:min-h-screen " style={{ background: `url(${bg})` }}>

            <div class="hero-content text-center text-neutral-content w-full">
                <div class=" flex-shrink-0 lg:w-5/12 sm:w-8/12 my-16">
                    <div class="card-body">
                        <div className="section-title">
                            <h1 className='lg:text-4xl font-bold text-center uppercase sm:text-2xl'>Contact Us</h1>
                            <h3 className='lg:text-xl text-center my-6 mg:text-xl'>Stay connected with us</h3>
                        </div>
                        <div class="form-control">

                            <input type="text" placeholder="Email" class="input input-bordered mb-3" />
                            <input type="text" placeholder="Subject" class="input input-bordered mb-3" />
                            <textarea placeholder='Message' class="input input-bordered " ></textarea>

                        </div>

                        <div class="mt-6">
                            <ButtonLink>Submit</ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;