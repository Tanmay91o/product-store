import React from 'react'
import { useEffect } from "react"
import { useState } from "react"
import { fetchProducts } from '../redux/productSlice'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import { useDispatch, useSelector } from 'react-redux'

const ProductListPage = () => {
    const dispatch = useDispatch();
    const { items, loading } = useSelector((state) => state.products);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    const filteredProducts = items.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <SearchBar search={search} setSearch={setSearch} />
            {loading ? (
                <p>Loading Products...</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )
            }
        </div>
    )
}

export default ProductListPage