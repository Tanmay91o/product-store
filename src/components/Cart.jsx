import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    return <div style={{ position: 'absolute', top: 10, right: 20, fontWeight: 'bold' }}> 🛒 Cart Items: {cart.length} </div>;
};

export default Cart;
