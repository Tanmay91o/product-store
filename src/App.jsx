import React from 'react';
import ProductListPage from './pages/ProductListPage';
import Cart from './components/Cart';

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <Cart />
      <h1 style={{ textAlign: 'center' }}>🛍️ Product Store</h1>
      <ProductListPage />
    </div>
  );
};

export default App;
