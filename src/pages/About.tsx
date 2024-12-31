import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">About Kiddi</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-600 mb-6">
            Welcome to Kiddi, your one-stop destination for premium children's products. Since 1970, 
            we've been dedicated to bringing joy and quality to children's lives through carefully 
            selected toys, clothing, and accessories.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to provide safe, educational, and fun products that contribute to your 
            child's development and happiness. Every product in our store is thoroughly tested and 
            meets the highest safety standards.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-pink-500">50+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-pink-500">10k+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?auto=format&fit=crop&w=800&q=80" 
            alt="Kids playing" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;