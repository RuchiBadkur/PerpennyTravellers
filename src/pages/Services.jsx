import React, { useState } from 'react';
import { services } from '../data/services';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePrevious() {
    setCurrentSlide(
      currentSlide === 0 ? services.length - 1 : currentSlide - 1
    );
  }

  function handleNext() {
    setCurrentSlide(
      currentSlide === services.length - 1 ? 0 : currentSlide + 1
    );
  }

  return (
    <div className=" bg-[#121212] h-screen  w-screen py-12 flex flex-col items-center justify-evenly">
      <h2 className="text-3xl text-white font-bold text-center">
        Why Choose Us ?
      </h2>
      <div className="services-slider ">
        <div className="w-full flex items-center gap-15">
          <BsArrowLeftCircleFill
            onClick={handlePrevious}
            className="arrow arrow-left text-gray-300  font-bold text-3xl"
          />

          {services && services.length
            ? services.map((service, index) => (
            <div
              className= {
                      currentSlide === index
                        ? 'block h-[400px] w-[800px] m-auto bg-[#2e3132] rounded-lg shadow-md cursor-pointer overflow-hidden  bg-center object-fill bg-cover relative'
                        : 'current-image hidden'
                    } 
              key={`${service.id}${index}`}
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="p-4 absolute text-black inset-0 h-[20%] m-auto backdrop-blur-md">
                <h4 className="text-xl font-bold text-shadow-white mb-2">
                  {service.name}
                </h4>
              </div>
            </div>
          )): null}
          <BsArrowRightCircleFill
            onClick={handleNext}
            className="arrow text-gray-300 arrow-right  font-bold text-3xl"
          />
        </div>
        
      <div className='bg-transparent  text-white  '>
        <h3 className='text-lg md:text-2xl text-white mt-8 mb-4'>About Us</h3>
        <p>Travel to any corner of the world.</p>
        <p>
          We aim at making travel easier and stress free for you and your
          family.
        </p>
        <button className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-green-100 hover:text-black transform transition duration-300 hover:scale-105 m-8'>More about us</button>
      </div>
      </div>
    </div>
  );
};

export default Services;
