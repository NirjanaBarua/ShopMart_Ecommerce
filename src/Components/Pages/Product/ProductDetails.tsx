import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { CartContext } from '../../../Context/CartContext';
import swal from 'sweetalert';

const ProductDetails = () => {
  const location = useLocation();
  const { product = {} } = location.state || {};
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    swal({
      title: "Added to Cart!",
      text: `${product.name} has been added successfully.`,
      icon: "success",
      confirmButtonColor: "#16a34a",
      confirmButtonText: "OK"
    });
  };

  const productReviews = product.reviews || [];

  return (
    <div >
      <div className="card lg:card-side bg-base-100 shadow-sm m-24 transition-transform duration-300 hover:shadow-lg">
        <figure>
          <img className='w-full h-80' src={product.image} alt={product.name} />
        </figure>
        <div className="card-body bg-gray-200 hover:bg-gray-300">
          <h2 className="card-title text-2xl">{product.name}</h2>
          <p className='font-semibold text-base'>Size: {product.size}</p>
          <p className='font-semibold text-base'>Color: {product.color}</p>
          <p className='font-semibold text-base'>Ram: {product.ram}</p>
          <p className='font-semibold text-base'>Storage: {product.storage}</p>
          <p className='font-semibold text-base'>Available: {product.stockAvailability}</p>
          <p className='font-semibold text-base'>Price: ৳ {product.price}</p>

          <div className="card-actions justify-end">
            <button onClick={handleAddToCart} className="btn btn-active btn-success text-white">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-10 bg-gray-100 rounded-lg p-6 shadow-sm mx-auto mb-6">
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Customer Reviews</h3>

        {productReviews.length > 0 ? (
          productReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-300 py-3">
              <h4 className="font-semibold">{review.name}</h4>
              <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">No reviews yet for this product.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
