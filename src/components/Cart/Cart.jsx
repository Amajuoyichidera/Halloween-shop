// Cart.js
import React from 'react';

const Cart = ({ cartItems, onClearCart }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.name} width="50" />
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <div>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button onClick={onClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;


