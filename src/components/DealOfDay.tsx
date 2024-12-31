import React from 'react';
import Button from './common/Button';

const DealOfDay = () => {
  return (
    <div className="bg-pink-50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Deal Of The Day</h2>
            <p className="text-gray-600 mb-6">UP TO 35% OFF ON ALL BABY PRODUCTS</p>
            <Button to="/shop?category=toys">Shop Now</Button>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80" 
              alt="Happy kid"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfDay;