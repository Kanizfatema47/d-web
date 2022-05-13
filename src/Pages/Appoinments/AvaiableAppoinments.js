import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvaiableAppoinments = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div>
            <p className='text-2xl text-center text-primary'>Available appoinments on {format(date , 'PP')}</p>
            <div className='grid mx-24 lg:grid-cols-3 gap-10 md:grid-cols-2 gap-6 sm:grid-cols-1'>
                {
                    services.map(service => (<Service
                    key={service._id}
                    service={service}>

                    </Service>))
                }
            </div>
        </div>
    );
};

export default AvaiableAppoinments;