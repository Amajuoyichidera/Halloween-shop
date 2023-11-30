import './App.css';
import style from '../src/components/Product/product.module.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import Product from './components/Product/Product';
import { CookieData, DecorationData, CostumeData } from './dummyData';
import { useState } from 'react';
import CartPage from './components/CartPage/CartPage';
import Header from './components/Header/Header';
import CandyPacks from './components/candyPacks/CandyPacks';
import heroBg from '../src/images/hero-01.jpg';
import halloBg from '../src/images/halloBg.jpg'
import Testimonial from './components/Testimonial/Testimonial';
import Free from './components/free/Free';
import Footer from './components/Footer/Footer';



function App() {

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  const item1 = {
    'img': heroBg,
    'p1': 'NEW COLLECTION',
    'h1': 'Halloween',
    'h2': 'Decorations',
    'p2': 'Whether you prefer the charm of classic Halloween decor or the thrill of modern and innovative designs, ',
    'p3': 'these decorations invite you to join in the celebration of all things eerie, enigmatic, and enchanting.',
  }

  const item2 = {
    'img': halloBg,
    'p1': 'NEW COLLECTION',
    'h1': 'Ceramic Halloween',
    'h2': 'Decorations',
    'p2': 'From intricately designed ceramic pumpkins with whimsical smiles to hauntingly beautiful ceramic, ',
    'p3': 'witch figurines, these decorations serve as captivating focal points in any Halloween display.',
  }

  return (
    <div id='home' className="App">
      <Navbar />
      <Hero item={item1} fontSize="100px" />
      <div id='product' className={style.product}>
        <Header small='MOST DELICIOUS' big='Candies & Cookies' />
        <div className={style.container}>
        {CookieData.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
        </div>
      </div>

      <div className={style.bigLine}></div>

      <CandyPacks />

      <div className={style.bigLine}></div>

      <div className={style.product}>
        <Header small='SCARRY' big='Decorations' />
        <div className={style.container}>
        {DecorationData.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
        </div>
      </div>

      <div style={{ paddingTop: '50px'}}>
       <Hero item={item2} fontSize="60px" />
      </div>

      <div className={style.product}>
        <Header small='UNFORGETTABLE' big='Costumes' />
        <div className={style.container}>
        {CostumeData.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
        </div>
      </div>

      <Testimonial />

      <div className={style.bigLine}></div>

      <Free />

      <div className={style.bigLine}></div>

      <Footer />

      <CartPage
        cartItems={cartItems}
        onClearCart={handleClearCart}
        onRemoveItem={handleRemoveItem}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
      />
    </div>
  );
}

export default App;





// replicated version of a website i saw online