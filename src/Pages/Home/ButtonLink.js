import React from 'react';

const ButtonLink = ({children}) => {
    
            
    return(
             <button className="btn bg-gradient-to-l from-primary to-secondary uppercase text-white border-none text-sm">{children}</button>
        
    );
};

export default ButtonLink;