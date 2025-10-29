import React, { useContext } from 'react';
import { CartContext } from '../../../Context/CartContext';



const CartItem = () => {


    const { state, dispatch } = useContext(CartContext);
    
    const { cart } = state;

    return (
        <div >
            {
                cart.map((item) =>
                    <div className='flex justify-end mt-6'>
                        <div className="card bg-neutral text-neutral-content w-3/4">
                        <div className="card-body items-center text-center">
                           
                            <button onClick={() => dispatch({ type: 'DELETE_FROM_CART', payload: item.id })} className="btn btn-ghost text-red-500">X</button>
                            
                            <h2 className="card-title">{item.name} </h2>
                            <p className='font-semibold'>Quantity: {item.count}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => dispatch({ type: 'INCREASE', payload: item.id })} className="btn btn-primary">+</button>
                                <button onClick={() => dispatch({ type: 'DECREASE', payload: item.id })} className="btn btn-ghost">-</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                )
            }


        </div>
    );
};

export default CartItem;