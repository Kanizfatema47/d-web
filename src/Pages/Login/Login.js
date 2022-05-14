import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
const Login = () => {

    // const emailRef = useRef;
    // const passRef = useRef;



    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [signInWithEmailAndPassword, user, error, loading] = useSignInWithEmailAndPassword(auth)
    let errorElement;

    if (user || gUser) {

        console.log(gUser)
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        errorElement = <p>{error?.message || gError?.message}</p>
    }
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }



    return (
        <div className='my-24'>
            <div className="card  mx-auto text-center bg-base-100 shadow-xl lg:w-4/12 sm:w-96">
                <div className="card-body ">
                    <h2 className="card-title text-center mx-auto">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>

                            <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provied a valid email'
                                    }
                                })} />


                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red">{errors.email.message}</span>}

                            </label>
                        </div>
                        <input />

                        {/* password */}

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>

                            <input type="" plpasswordaceholder="Password" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 character and longer"
                                    }
                                })} />


                            <label class="label">
                                <span class="label-text-alt">Forget Password?</span>
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red">{errors.password.message}</span>}

                            </label>
                        </div>
                        <input />
                        {errorElement}
                        <input className='btn w-full max-w-xs uppercase' type="submit" value="Login" />
                    </form>
                    <p>New to doctors portal? <Link className='text-secondary' to='/register'> Create new account </Link> </p>

                    <div className="divider">OR</div>
                    <div className=" rounded-box place-items-center ">
                        <button onClick={() => signInWithGoogle()} className="btn text-black bg-transparent w-full border-primary hover:text-white">Login with Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;