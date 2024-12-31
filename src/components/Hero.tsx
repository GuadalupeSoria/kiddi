import React from 'react';
import Button from './common/Button';

const Hero = () => {
  return (
    <div className="relative bg-sky-100 min-h-[500px] md:min-h-[600px] flex items-center">
      <div className="absolute top-0 left-0 right-0">
        <div className="bg-white h-8 wave-pattern"></div>
      </div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Kids Store<br />& Online Shop
          </h1>
          <p className="text-gray-600 mb-6">Give The Gift Of Your Children Everyday</p>
          <Button to="/shop">Shop This Now</Button>
        </div>
        
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80" 
            alt="Colorful toys"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;