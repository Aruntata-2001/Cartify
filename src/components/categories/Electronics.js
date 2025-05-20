import React from 'react';
import './CategoryPage.css';

const electronicsProducts = [
  { id: 1, name: 'Smartphone', description: 'Latest 5G smartphone.', className: 'smartphone-card' },
  { id: 2, name: 'Laptop', description: 'Powerful laptop for all tasks.', className: 'laptop-card' },
  { id: 3, name: 'Smart TV', description: 'Ultra HD Smart TV with apps.', className: 'tv-card' },
  { id: 4, name: 'Headphones', description: 'Wireless, noise-canceling headphones.', className: 'headphones-card' },
  { id: 5, name: 'Bluetooth Speaker', description: 'Deep bass portable speaker.', className: 'speaker-card' },
  { id: 6, name: 'Smartwatch', description: 'AMOLED fitness smartwatch.', className: 'watch-card' },
];

const Electronics = () => {
  return (
    <div className="category-page">
      <h2>Electronics</h2>
      <p>Explore phones, laptops, appliances, and more.</p>
      <div className="products-grid">
        {electronicsProducts.map(product => (
          <div className={`product-card ${product.className}`} key={product.id}>
            <div className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-buttons">
                <button className="buy-btn">Buy Now</button>
                <button className="cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
