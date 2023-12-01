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

    const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className={`cartPage ${isCartOpen ? 'open' : ''}`}>
     <div className="cartSidebar">
        <button className="cartButton" onClick={toggleCart}>
          <AiOutlineShoppingCart /> Cart {cartItemCount > 0 && <span className="itemCount">{cartItemCount}</span>}
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
