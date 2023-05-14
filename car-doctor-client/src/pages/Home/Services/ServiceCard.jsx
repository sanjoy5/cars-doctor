import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-6">
                <img src={img} className='h-[234px] w-full object-contain mb-5' alt="Shoes" />
                <div className="">
                    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                    <div className="flex items-center justify-between">
                        <p className="text-lg text-[#FF3811] font-semibold">Price: ${price}</p>
                        <Link to={`/book/${_id}`}>
                            <FaArrowRight className='text-lg text-[#FF3811] cursor-pointer' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard