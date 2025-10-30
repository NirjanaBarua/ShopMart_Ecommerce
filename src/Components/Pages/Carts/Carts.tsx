import React from 'react';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import { Slide } from 'react-awesome-reveal';

const Carts = () => {
    return (
        <div className='grid lg:grid-cols-2 '>

            <section>
                <Slide direction='right'>
                    <CartItem></CartItem>
                </Slide>
            </section>


            <section>
                <Slide direction='left'>
                    <OrderSummary></OrderSummary>
                </Slide>
            </section>



        </div>
    );
};

export default Carts;