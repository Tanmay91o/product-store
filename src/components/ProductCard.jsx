import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div style={{ border: '1px solid #ddd', padding: 10 }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: 150 }} />
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart 🛒
            </button>
        </div>
    );
};

export default ProductCard;
