import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import bannerimg from '../../assets/images/chair.png'
import 'react-day-picker/dist/style.css'
import { format } from 'date-fns';
const AppoinmentBanner = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <div class="hero min-h-screen mb-24">
                <div class="hero-content flex-col  lg:flex-row-reverse ">
                    <img src={bannerimg} alt=''class="lg:w-1/2 rounded-lg shadow-2xl sm:w-full"/>
                    <div className=' w-full sm:mt-8'>
                        <div className='card shadow-lg w-1/2 mx-auto text-center'>
                        <DayPicker 
                        className='mx-auto text-center'
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                        
                        ></DayPicker>
                            <p>You have selected: {format(date, 'PPP')}</p>
                            </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;