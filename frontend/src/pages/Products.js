import React, { useState } from 'react';
import './Products.css';

function Products() {
  const [products] = useState([
    { id: 1, name: 'Premium Rose', price: 99.99 },
    { id: 2, name: 'Ocean Breeze', price: 79.99 },
    { id: 3, name: 'Vanilla Dreams', price: 89.99 }
  ]);

  return (
    <div className="products-page">
      <div className="container">
        <h1>Our Products</h1>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
