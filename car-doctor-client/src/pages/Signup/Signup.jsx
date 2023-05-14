import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/login/login.svg'
import { useAuthContext } from '../../AuthProvider/AuthProvider'
import SocialLogin from '../Shared/SocialLogin/SocialLogin'

const Signup = () => {

    const { createUser } = useAuthContext()

    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <img src={img} className='mx-auto' alt="" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h1 className="text-2xl font-bold text-center">Signup now</h1>
                                <form onSubmit={handleSignIn} >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="Confirm password" className="input input-bordered" />

                                        {/* <label className="label">
                                            <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                                        </label> */}
                                    </div>
                                    <div className="form-control mt-6">
                                        <input type='submit' className="py-3 px-6 text-lg rounded-md text-white bg-[#FF3811] hover:bg-[#d13415] mr-5 w-full" value='Sign Up' />
                                    </div>
                                </form>
                                <p className='text-center my-3'>Already have an account?  <Link className='text-[#FF3811] ' to="/login">Login</Link></p>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup