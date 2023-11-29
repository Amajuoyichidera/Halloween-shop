// CartPage.js
import React from 'react';
import Cart from './Cart';

const CartPage = ({ cartItems, onClearCart, onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <Cart
        cartItems={cartItems}
        onRemoveItem={onRemoveItem}
        onIncreaseQuantity={onIncreaseQuantity}
        onDecreaseQuantity={onDecreaseQuantity}
      />
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button onClick={onClearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
