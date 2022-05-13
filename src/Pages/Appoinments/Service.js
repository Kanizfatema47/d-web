import React, { useEffect, useState } from 'react';
import ButtonLink from '../Home/ButtonLink';

const Service = ({ service, setTreatment}) => {
    const { name, slots } = service;
    // const [disable, setDisable] = useState(true)

    // useEffect(() => {


    //     if (slots.length === 0) {
    //         setDisable(true)
    //     }
    // }
    //     , []
    // )
    return (
        <div>
            <div class="card  bg-base-100 shadow-xl ">
                <div class="card-body text-center">
                    <h2 class="font-bold text-2xl text-accent  text-center">{name}</h2>
                    <p>
                        {
                            slots.length ? <span>{slots[0]}</span>
                                : <span >Try another date</span>
                        }

                    </p>
                    <p className='text-accent text-lg'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} availabe</p>
                    <div class="card-actions justify-center">
                    {/* <button >Book Appoinment</button> */}
                    <label for="my-modal-6" onClick={()=> setTreatment(service)} class=" modal-button btn bg-gradient-to-l from-primary to-secondary uppercase text-white border-none text-sm">Book Appoinment</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;