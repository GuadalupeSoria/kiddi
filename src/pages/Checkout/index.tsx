import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useCart } from '../../context/CartContext';

const Checkout = () => {
  const { state } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
        <p className="text-gray-600">Add some items to your cart to proceed with checkout.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;