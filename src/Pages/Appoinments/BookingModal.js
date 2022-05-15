import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date , setTreatment}) => {
    const {_id, name,  slots } = treatment
    const [user] = useAuthState(auth)

const handleBooking =(e)=>{
    e.preventDefault ();
    const slot = e.target.slot.value;
    console.log(_id, slot, name, date)
    setTreatment(null);
}

    return (
        <div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary text-center mb-8">Booking for: {treatment.name}</h3>
                    <form onSubmit={handleBooking}  className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot , index) => (<option 
                                key={index}
                                value={slot} >{slot}

                                </option>))
                            }

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" email='email'disabled value={user?.email || ''}  placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type='number' phone='phone' placeholder='Phone Number' className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                    </form>
                    {/* <div className="modal-action">
                        <label for="my-modal-6" className="btn">OK</label>
                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default BookingModal;