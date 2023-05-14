import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://car-doctor-server-six-xi.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div className='text-center'>
                <h3 className='text-2xl text-[#FF3811] font-bold mb-4'>Our Services</h3>
                <h2 className="text-5xl font-bold">Our Services Area</h2>
                <p className="py-6 w-5/12 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 my-16 gap-10'>
                {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>

        </div>
    )
}

export default Services