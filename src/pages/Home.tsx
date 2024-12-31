import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import DealOfDay from '../components/DealOfDay';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductGrid />
      <DealOfDay />
    </>
  );
};

export default Home;