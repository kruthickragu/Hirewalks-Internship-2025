import React from 'react';
import eatnowlogo from '../assets/logoe.png';  
import { FaShoppingCart } from 'react-icons/fa';  

const Header = () => {
  return (
    <div style={styles.headerContainer}>
      <div style={styles.logoContainer}>
        <img src={eatnowlogo} alt="Logo" style={styles.logo} />
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="/about" style={styles.navLink}>Delivery</a></li>
          <li style={styles.navItem}><a href="/services" style={styles.navLink}>Dine in</a></li>
          <li style={styles.navItem}>
            <a href="/cart" style={styles.navLink}>
              <FaShoppingCart style={styles.cartIcon} /> Cart
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'rgb(252, 227, 138)',
    color: '#fff',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    height: '60px', 
  },
  nav: {
    flex: 2,
  },
  navList: {
    display: 'flex',
    justifyContent: 'flex-end',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  cartIcon: {
    marginRight: '5px',  
    fontSize: '18px',    
  },
};

export default Header;
