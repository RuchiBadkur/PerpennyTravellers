import React from 'react'
import { destinations } from '../data/destinations'

const PopularDestinations = () => {
  return (
        <div className=' py-12 w-screen bg-[#111111]'>
            <div className='px-4 mb-8'>
            <h3 className='text-3xl font-bold text-center text-white mb-15'>Popular Destinations</h3>
            <div className='grid gap-6 sm:grid-cols-3 xl-grid-cols-4'>
                {destinations.map((city, index) => (
                    <div className='bg-[#2e3132] rounded-lg shadow-md cursor-pointer overflow-hidden' key={`${city.id}${index}`}>
                        <img className='h-60 w-full object-cover transform transition duration-300 hover:scale-110' src={city.img} alt={city.name} />
                        <div className='p-4'>
                            <h4 className='text-xl font-bold text-white mb-2'>{city.name}</h4>
                            <p className='text-[#c5c2c2]'>{city.description}</p>
                            <p >{city.price}</p>
                            <p>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>
                                        {i < Math.floor(city.stars)? "⭐️" : "🩶"}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
  )
}

export default PopularDestinations