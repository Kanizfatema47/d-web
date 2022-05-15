import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { useEffect } from 'react';
const Login = () => {

    // const emailRef = useRef;
    // const passRef = useRef;



    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [signInWithEmailAndPassword, user, error, loading] = useSignInWithEmailAndPassword(auth)
    let errorElement;
    const navigate = useNavigate();
    const location = useLocation();
    let from= location.state?.form?.pathname || '/appoinments'

   useEffect(()=>{
    if (user || gUser) {

        console.log(gUser)
        navigate (from, {replace: true})
    }
   } ,[user, gUser, from , navigate])

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
        <div className='my-16'>
            <div className="card  mx-auto text-center bg-base-100 shadow-xl lg:w-4/12 sm:w-96">
                <div className="card-body ">
                    <h2 className="card-title text-center mx-auto my-">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs mx-auto text-center">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>

                            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"
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


                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red">{errors.email.message}</span>}

                            </label>
                        </div>
                        <input />

                        {/* password */}

                        <div className="form-control w-full max-w-xs mx-auto text-center mt-[-35px]">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>

                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
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


                            <label className="label">
                                <span className="label-text-alt">Forget Password?</span>
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red">{errors.password.message}</span>}

                            </label>
                        </div>
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