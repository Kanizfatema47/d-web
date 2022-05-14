import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date , setTreatment}) => {
    const {_id, name,  slots } = treatment

const handleBooking =(e)=>{
    e.preventDefault ();
    const slot = e.target.slot.value;
    console.log(_id, slot, name, date)
    setTreatment(null);
}

    return (
        <div>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-primary text-center mb-8">Booking for: {treatment.name}</h3>
                    <form onSubmit={handleBooking}  className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => (<option value={slot} >{slot}

                                </option>))
                            }

                        </select>
                        <input type="text" name='name' placeholder="Full Name" class="input input-bordered w-full max-w-xs" />
                        <input type='number' phone='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="email" email='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" />
                    </form>
                    {/* <div class="modal-action">
                        <label for="my-modal-6" class="btn">OK</label>
                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default BookingModal;