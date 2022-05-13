import React from 'react';
import Button from '../Home/Button';

const Service = ({ service }) => {
    const { name, slots } = service
    return (
        <div>
            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-2xl text-accent">{name}</h2>
                    <p className='text-accent text-lg'>{slots.length} space availabe</p>
                    <div class="card-actions justify-center">
                        <Button>Book Appoinment</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;