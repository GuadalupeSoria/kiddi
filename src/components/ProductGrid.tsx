import React, { useState } from 'react';
import { products } from '../data/products';
import { Category } from '../types';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex gap-4 mb-8 overflow-x-auto">
        <button 
          className={`px-6 py-2 rounded-full transition-colors ${
            selectedCategory === 'all' ? 'bg-pink-400 text-white' : 'text-gray-600 hover:text-pink-400'
          }`}
          onClick={() => setSelectedCategory('all')}
        >
          All Items
        </button>
        <button 
          className={`px-6 py-2 rounded-full transition-colors ${
            selectedCategory === 'dress' ? 'bg-pink-400 text-white' : 'text-gray-600 hover:text-pink-400'
          }`}
          onClick={() => setSelectedCategory('dress')}
        >
          Baby Dress
        </button>
        <button 
          className={`px-6 py-2 rounded-full transition-colors ${
            selectedCategory === 'toys' ? 'bg-pink-400 text-white' : 'text-gray-600 hover:text-pink-400'
          }`}
          onClick={() => setSelectedCategory('toys')}
        >
          Baby Toys
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;