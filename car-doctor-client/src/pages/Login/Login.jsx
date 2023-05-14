import React from 'react'
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../AuthProvider/AuthProvider'
import SocialLogin from '../Shared/SocialLogin/SocialLogin'

const Login = () => {
    const { signIn } = useAuthContext()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(from, { replace: true })

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
                                <h1 className="text-2xl font-bold text-center">Login now</h1>
                                <form onSubmit={handleLogin} >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                        <label className="label">
                                            <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input type='submit' value='Login' className="py-3 px-6 text-lg rounded-md text-white bg-[#FF3811] hover:bg-[#d13415] mr-5 w-full" />
                                    </div>
                                </form>
                                <p className='text-center my-3'>New to Car Doctors ?  <Link className='text-[#FF3811] ' to="/signup">Sign Up</Link></p>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login