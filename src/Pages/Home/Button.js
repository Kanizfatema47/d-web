import React from 'react';

const Button = ({children}) => {
    return (
        
            <button class="btn bg-gradient-to-l from-primary to-secondary uppercase text-white border-none text-sm">{children}</button>
        
    );
};

export default Button;