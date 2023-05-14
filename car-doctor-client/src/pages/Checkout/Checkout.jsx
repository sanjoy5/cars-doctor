import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Checkout = () => {
    const service = useLoaderData()
    const { title, _id } = service;
    return (
        <div className='max-w-7xl mx-auto py-16'>
            <h2>Book Service : {title}</h2>


            <div className="w-full mx-auto bg-base-200 py-4 md:py-16  px-4 md:px-16">
                <div className="">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input" />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input" />
                        </div>
                    </div>



                    <div className="form-control mt-6">
                        <input type='submit' className="btn btn-primary" value='Order Confirm' />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Checkout