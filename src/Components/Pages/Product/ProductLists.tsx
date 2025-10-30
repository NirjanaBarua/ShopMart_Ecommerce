import React from 'react';
import { ProductType } from './Product';
import { useNavigate } from 'react-router';

type Products = {
    product: ProductType
}

const ProductLists = ({ product }: Products) => {

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/productdetails/${product.id}`,{ state: { product } });
    }

   
    return (
        <div>
            
            <div className="card bg-base-100 w-full shadow-sm transition-transform duration-300 hover:shadow-lg">
                <figure>
                    <img
                        className='w-full h-64  object-cover transition-transform duration-300 group-hover:scale-105'
                        src={product.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body bg-gray-200">
                    <h2 className="card-title">{product.name}</h2>
                    <h3 className='font-semibold'>Price: {product.price} ৳</h3>

                    <div className="card-actions justify-end">
                        <button onClick={handleViewDetails} className="btn btn-active btn-success text-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLists;