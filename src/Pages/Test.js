import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Test = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)

    if(user){
        console.log(user)
    }
    return (
        <div>
            <button onClick={()=> signInWithGoogle()} className='btn btn-primary' type="submit">Test</button>
        </div>
    );
};

export default Test;