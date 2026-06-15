import React, { useState } from 'react';

function Products() {
  const [products] = useState([
    { id: 1, name: 'Premium Rose', price: 99.99, stock: 50 },
    { id: 2, name: 'Ocean Breeze', price: 79.99, stock: 30 }
  ]);

  return (
    <div>
      <h1>Product Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
