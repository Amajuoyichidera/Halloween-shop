// Product.js
import React, { useState, useEffect } from 'react';
import style from './product.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = ({ product, onAddToCart }) => {
  const { id, img, name, price } = product;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className={style.container}>
      <div   data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" key={id} className={style.product}>
      <img className={style.img} src={img} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
       <div className={style.pick}>
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
    </div>
    </div>
  );
};

export default Product;

