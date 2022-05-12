import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card  bg-base-100 shadow-xl sm:w-8/12 mx-auto">
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum distinctio quae libero voluptas quam!</p>
                <div className='flex justify-between'>
                    <div class="avatar my-auto">
                        <div class="w-16  h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt='' />
                        </div>
                    </div>                    
                    <div class="card-body">
                        <h2 class="card-title lg:text-2xl sm:text-xl">{review.name}</h2>
                        <p className='sm:text-lg'>{review.location}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;