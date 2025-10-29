import React from 'react';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';

const Carts = () => {
    return (
        <div className='grid grid-cols-2'>
            <section>
                <CartItem></CartItem>
            </section>

            <section>
                <OrderSummary></OrderSummary>
            </section>
            
        </div>
    );
};

export default Carts;