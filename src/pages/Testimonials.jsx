import React, { useEffect, useState } from 'react'
import { testimonials } from '../data/testimonials'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev === testimonials.length - 1 ? 0 : prev+1)
        }, 5000)

        return () => clearInterval(interval)
    }, [currentIndex])

    const {image, name, feedback, rating} = testimonials[currentIndex];


    return (
    <div className="bg-[#121212] text-black h-screen  w-screen py-12 min-h-screen flex flex-col items-center justify-center bg-cover relative bg-center" style={{ backgroundImage: 'url("/images/travel-buddies.gif")'}}>
        <h3 className='text-3xl font-bold text-center text-white mb-15'>PerPenny Journeys✈️  <br /> More Than a Trip — A Story to Tell</h3>
        <div className="w-full  max-w-xl mx-auto p-6 rounded-2xl shadow-lg text-center transition-all duration-500 ease-in-out  backdrop-blur-2xl" >
            <img src={image} alt={name} className='w-20 h-20 rounded-full mx-auto mb-4'/>
            <h2 className='text-xl font-semibold'>{name}</h2>
            <p className='text-green-600 italic my-2'>{feedback}</p>
            <div className="flex justify-center mt-2 ">
                {[...Array(5)].map((_, i) => (
                                    <span key={i}>
                                        {i < rating ? "⭐️" : "🩶"}
                                    </span>
                                ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonials