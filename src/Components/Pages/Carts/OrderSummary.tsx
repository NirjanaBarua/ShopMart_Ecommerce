import React, { useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';

const OrderSummary = () => {

    const { state } = useContext(CartContext);
    const { cart } = state;
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.count, 0);
    const total = subtotal + 150;

    return (
        <div className="flex justify-end pr-18"> 
            <div className="card w-96 bg-black shadow-sm mt-6 mb-6">
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-semibold text-white">Order Summary</h2>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-xl font-semibold">
                            <span className="text-green-600">Subtotal:</span>
                            <span className="text-white">৳ {subtotal}</span>
                        </div>
                        <div className="flex justify-between text-xl font-semibold">
                            <span className="text-gray-400">Delivery Fee:</span>
                            <span className="text-white">৳ 150</span>
                        </div>
                        <hr className="my-2 border-gray-600" />
                        <div className="flex justify-between text-xl font-semibold">
                            <span className="text-red-600">Total:</span>
                            <span className="text-white">৳ {total}</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
