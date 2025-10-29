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
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        className='w-full h-64'
                        src={product.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <h3 className='font-semibold'>Price: {product.price} ৳</h3>

                    <div className="card-actions justify-end">
                        <button onClick={handleViewDetails} className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLists;