import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import Button from './common/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="bg-sky-50 rounded-lg p-4 transition-transform hover:scale-105">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-pink-500">${product.price.toFixed(2)}</p>
        </div>
        <Button onClick={handleAddToCart} className="p-2 !px-2">
          <ShoppingCart className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;