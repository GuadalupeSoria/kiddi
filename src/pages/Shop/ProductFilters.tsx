import React from 'react';
import { Category } from '../../types';

interface ProductFiltersProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {['all', 'dress', 'toys'].map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category as Category)}
              className={`block w-full text-left px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-pink-100 text-pink-500'
                  : 'hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
              className="w-full p-2 border rounded-md"
              placeholder="Min"
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
              className="w-full p-2 border rounded-md"
              placeholder="Max"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;