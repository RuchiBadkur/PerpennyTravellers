import React from 'react';
import PopularDestinations from './PopularDestinations';
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className=" w-screen min-h-screen bg-cover bg-center flex items-center justify-center px-4"
        style={{ backgroundImage: 'url("/images/travel-home.gif")' }}
      >
        <div className="bg-black/50 backdrop-blur-sm rounded-md text-white text-center p-6 md:p-10 w-full max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-md sm:text-lg md:text-2xl mb-6">
            Book unforgettable experiences with us
          </p>
          <button className="border border-white text-white px-6 py-2 rounded-full text-base md:text-xl hover:bg-green-100 hover:text-black transition duration-300 transform hover:scale-105">
            Explore Now
          </button>
        </div>
      </div>

      {/* Sections */}
      <PopularDestinations  className="min-w-full min-h-full"/>
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
