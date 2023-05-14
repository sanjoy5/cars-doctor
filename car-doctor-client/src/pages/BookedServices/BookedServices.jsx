import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useAuthContext } from '../../AuthProvider/AuthProvider';


const BookedServices = () => {
    const service = useLoaderData()
    const { title, _id, price, img } = service;
    const { user } = useAuthContext()

    const handleBookService = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email

        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }

        console.log('booking : ', booking);

        fetch('https://car-doctor-server-six-xi.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Service book successfully')
                    form.reset()
                }
            })

    }

    return (
        <div className='max-w-7xl mx-auto py-16'>


            <div className="w-full mx-auto bg-base-200 py-4 md:py-16  px-4 md:px-16 rounded-lg">
                <form onSubmit={handleBookService}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} className="input" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input" />
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} className="input" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deu Amount</span>
                            </label>
                            <input type="text" name='amount' defaultValue={'$' + price} className="input" />
                        </div>
                    </div>



                    <div className="form-control mt-8">
                        <input type='submit' className="py-3 px-6 rounded-md text-white text-md cursor-pointer  bg-[#FF3811] hover:bg-[#d13617]" value='Order Confirm' />
                    </div>
                </form>
            </div>
        </div>


    )
}


export default BookedServices