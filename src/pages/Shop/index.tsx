import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import ProductFilters from './ProductFilters';
import { products } from '../../data/products';
import { Category } from '../../types';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const searchQuery = searchParams.get('q')?.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery) || 
      product.category.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-64">
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
          />
        </aside>

        <main className="flex-1">
          {searchQuery && (
            <h2 className="text-2xl font-semibold mb-6">
              Search results for "{searchQuery}"
            </h2>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;