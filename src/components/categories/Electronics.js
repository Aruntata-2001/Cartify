import React from 'react';
import './CategoryPage.css';

const electronicsProducts = [
  {
    id: 1,
    name: 'Smartphone',
    description: 'Latest 5G smartphone with high-resolution camera.',
    image: 'https://via.placeholder.com/200x150?text=Smartphone',
  },
  {
    id: 2,
    name: 'Laptop',
    description: 'High-performance laptop for work and play.',
    image: 'https://via.placeholder.com/200x150?text=Laptop',
  },
  {
    id: 3,
    name: 'Smart TV',
    description: '4K UHD Smart TV with voice control.',
    image: 'https://via.placeholder.com/200x150?text=Smart+TV',
  },
  {
    id: 4,
    name: 'Headphones',
    description: 'Noise-cancelling wireless headphones.',
    image: 'https://via.placeholder.com/200x150?text=Headphones',
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    description: 'Portable speaker with deep bass and long battery life.',
    image: 'https://via.placeholder.com/200x150?text=Speaker',
  },
  {
    id: 6,
    name: 'Smartwatch',
    description: 'Fitness tracking smartwatch with AMOLED display.',
    image: 'https://via.placeholder.com/200x150?text=Smartwatch',
  },
];

const Electronics = () => {
  return (
    <div className="category-page">
      <h2>Electronics</h2>
      <p>Explore phones, laptops, appliances, and more.</p>
      <div className="products-grid">
        {electronicsProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-buttons">
              <button className="buy-btn">Buy Now</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
