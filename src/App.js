import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import { CookieData } from './dummyData';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };


  return (
    <div className="App">
          <Navbar />
          <Hero />
          <div className="products">
        {CookieData.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} onClearCart={handleClearCart} />
      
    </div>
  );
}

export default App;


 {/* <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/cart">
            <CartPage
              cartItems={cartItems}
              onRemoveItem={handleRemoveItem}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
              onClearCart={handleClearCart}
            />
          </Route>
          <Route path="/">
          <Navbar />
          <Hero />
            <div className="products">
              {CookieData.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </Route>
        </Switch>
      </div>
    </Router> */}

      {/* <div className="products">
        {CookieData.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} onClearCart={handleClearCart} /> */}