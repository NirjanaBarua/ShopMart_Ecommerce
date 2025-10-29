import React, { useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';

const OrderSummary = () => {

    const { state } = useContext(CartContext);
    const {cart}=state;
    const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.count, 0);
    const total=subtotal+150;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">Order Summary</h2>
                    </div>
                    <div>
                        <h2>Subtotal: {subtotal}</h2>
                        <h2>Delivery Fee: 150</h2>
                        <hr />
                        <h2>Total: {total}</h2>
                    </div>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;