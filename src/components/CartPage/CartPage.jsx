// CartPage.js
import React from 'react';
import Cart from '../Cart/Cart';
import './cartPage.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';



const CartPage = ({
  cartItems,
  onClearCart,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
  isCartOpen,
  toggleCart, }) => {

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={`cartPage ${isCartOpen ? 'open' : ''}`}>
     <div className="cartSidebar">
        <button className="cartButton" onClick={toggleCart}>
          <AiOutlineShoppingCart /> Cart
        </button>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <React.Fragment>
            <Cart
              cartItems={cartItems}
              onRemoveItem={onRemoveItem}
              onIncreaseQuantity={onIncreaseQuantity}
              onDecreaseQuantity={onDecreaseQuantity}
            />
            <button onClick={onClearCart}>Clear Cart</button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default CartPage;
