import React from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully!');
    state.items.forEach(item => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
    });
    navigate('/');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 mb-2">Address</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <label className="block text-gray-700 mb-2">City</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">State</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">ZIP Code</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-2">
            {state.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full mt-6">
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;