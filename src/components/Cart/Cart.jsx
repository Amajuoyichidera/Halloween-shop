// Cart.js
import React from 'react';
import style from './cart.module.css'
import { FaTrash } from 'react-icons/fa';

const Cart = ({
  cartItems,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={style.cart}>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className={style.item}>
            <img style={{ borderRadius: '5px' }} src={item.img} alt={item.name} width="70" />
            <div className={style.control}>
            <button onClick={() => onIncreaseQuantity(item.id)}>
              +
            </button>
            <button onClick={() => onDecreaseQuantity(item.id)}>
              -
            </button>
            <FaTrash style={{ cursor: 'pointer' }} onClick={() => onRemoveItem(item.id)} />
            </div>
            </div>
            <div className={style.name}>
            {item.name} - <span>${item.price}</span> x {item.quantity}
            </div>
          </li>
        ))}
      </ul>

      <div className={style.line}></div>
      {cartItems.length > 0 && (
        <div className={style.total}>
          <p>Total Price: <span className={style.span}>${totalPrice.toFixed(2)}</span> </p>
        </div>
      )}
    </div>
  );
};

export default Cart;


