import React from 'react';
import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return       (
    <div className={styles.navbarWrapper}>
    <h1 className={styles.title}>My closet</h1>
    <div className={styles.info}>
      <Link to="/" className={styles.details}>Home</Link>
      <Link to="/accessories" className={styles.details}>Accessories</Link>
      <Link to="/info" className={styles.details}>Info</Link>
      <Link to="/shop" className={styles.details}>Shop</Link>
    </div>
  </div>
  )
}