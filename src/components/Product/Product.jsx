// Product.js
import React, { useState } from 'react';

const Product = ({ product, onAddToCart }) => {
  const { id, img, name, price } = product;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  return (
    <div key={id} className="product">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      />
      <button onClick={() => onAddToCart({ ...product, quantity, img })}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

