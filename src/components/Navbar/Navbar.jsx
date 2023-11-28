// Navbar.js
import React, { useState } from 'react';
import styles from './navbar.module.css'; // Import the CSS module
// ...

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>

      <div className={`${styles.menu} ${isMobile ? styles.mobile : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>

      <div className={styles.hamburger} onClick={handleToggle}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </nav>
  );
};

export default Navbar;
