import React, { useEffect, useState } from 'react';
import ProductLists from './ProductLists';

export type ProductType = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    size: number;
    color: string;
    stockAvailability: boolean;
}


const Product = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        fetch('/src/products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="grid grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductLists key={product.id} 
                product={product} />
            ))}
        </div>
    );
};

export default Product;
