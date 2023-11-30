// Cart.js
import React from 'react';

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
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.name} width="50" />
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => onIncreaseQuantity(item.id)}>
              Increase
            </button>
            <button onClick={() => onDecreaseQuantity(item.id)}>
              Decrease
            </button>
            <button onClick={() => onRemoveItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <div>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;


