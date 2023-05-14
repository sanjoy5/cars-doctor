import React from 'react'
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                        <img src={person} className="w-10/12 h-full object-cover rounded-lg shadow-2xl" alt='...' />
                        <img src={parts} className="w-6/12 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" alt='...' />
                    </div>
                    <div className='lg:w-1/2'>

                        <p className="text-2xl text-[#FF3811] font-bold mb-4">About Us</p>
                        <h1 className="text-5xl font-bold leading-[55px] md:w-8/12">We are qualified & of experience in this field</h1>
                        <p className="py-6 md:w-10/12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="py-6 md:w-10/12">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="py-3 px-6 text-lg rounded-md text-white bg-[#FF3811] hover:bg-[#d13415] mr-5">Get More Info</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About