import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)

    return (
        <div >
            <form>

            </form>
            <button onClick={()=> signInWithGoogle()} className="btn text-black bg-transparent w-full border-primary hover:text-white">Login with Google</button>

        </div>
    );
};

export default SignIn;