import React, { useEffect, useState } from 'react';
import ProductLists from './ProductLists';
import { Slide } from 'react-awesome-reveal';

export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  size: number;
  color: string;
  ram: number;
  storage: number;
  stockAvailability: number;
};

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch('/src/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center px-4 py-8">
      
      <div className="mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
      <Slide direction="right">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl w-full justify-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductLists key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500 text-lg font-medium text-center col-span-full">
            No products found for this category.
          </p>
        )}
      </div>
      </Slide>

      
    </div>
  );
};

export default Product;
