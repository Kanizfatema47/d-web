import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
const Login = () => {

    // const emailRef = useRef;
    // const passRef = useRef;



    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    if (user) {

        console.log(user)
    }

    // const handleSubmit= e =>{
    //     e.preventDefault();
    //     email = emailRef.e.target.value;
    //     password = passRef.e.target.value;
    // }

    return (
        <div className='my-24'>
            <div className="card  mx-auto text-center bg-base-100 shadow-xl lg:w-4/12 sm:w-96">
                <div className="card-body ">
                    <h2 className="card-title text-center mx-auto">Login</h2>
                    <form className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="email" email='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        <p className='text-left'>Forget password?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary uppercase">Login</button>
                        </div>

                    </form>
                    <div className="flex flex-col w-full">
                        <div className="rounded-box place-items-center">
                            <p>New to doctors portal? <Link className='text-secondary' to='/register'> Create new account </Link> </p>

                        </div>
                        <div className="divider">OR</div>
                        <div className=" rounded-box place-items-center ">
                            <button  onClick={()=> signInWithGoogle()} className="btn text-black bg-transparent w-full border-primary hover:text-white">Login with Google</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;