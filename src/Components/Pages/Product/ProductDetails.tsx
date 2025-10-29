import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ProductType } from './Product';
import { CartContext } from '../../../Context/CartContext';

const ProductDetails = () => {
    const location = useLocation();
    const { product = {} } = location.state || {};
    const { state, dispatch } = useContext(CartContext);



    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        className='w-full h-64'
                        src={product.image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.size}</p>
                    <p>{product.color}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;