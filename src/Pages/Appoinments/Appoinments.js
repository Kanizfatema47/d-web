import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvaiableAppoinments from './AvaiableAppoinments';

const Appoinments = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>

            <AvaiableAppoinments date ={date}></AvaiableAppoinments>
            <Footer></Footer>

        </div>
    );
};

export default Appoinments;