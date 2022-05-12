import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '',
            location: 'USA',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            location: 'New York',
            img: people3
        },
    ];
    return (
        <section className='mb-32 mx-24  '>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-center text-accent lg:text-4xl font-bold uppercase sm:text-2xl'>Testimonials</h1>
                    <h3 className=' text-center text-accent  lg:text-xl my-6 mg:text-xl'>What out patients says</h3>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 sm:grid-cols-1 mx-0 gap-5'>
                {
                    reviews.map(review => (<Review
                        key={review._id}
                        review={review}>


                    </Review>))
                }
            </div>
        </section>
    );
};

export default Testimonials;