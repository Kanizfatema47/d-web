import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card  bg-base-100 shadow-xl sm:mx-auto">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum distinctio quae libero voluptas quam!</p>
                <div className='flex justify-between'>
                    <div className="avatar my-auto">
                        <div className="w-16  h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt='' />
                        </div>
                    </div>                    
                    <div className="card-body">
                        <h2 className="card-title lg:text-2xl sm:text-xl">{review.name}</h2>
                        <p className='sm:text-lg'>{review.location}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;