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

  return (
    <div className={`cartPage ${isCartOpen ? 'open' : ''}`}>
     <div className="cartSidebar">
        <button className="cartButton" onClick={toggleCart}>
          <AiOutlineShoppingCart /> Cart
        </button>
        {cartItems.length === 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          <React.Fragment>
            <Cart
              cartItems={cartItems}
              onRemoveItem={onRemoveItem}
              onIncreaseQuantity={onIncreaseQuantity}
              onDecreaseQuantity={onDecreaseQuantity}
            />
            <button className='clear' onClick={onClearCart}>Clear Cart</button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default CartPage;
