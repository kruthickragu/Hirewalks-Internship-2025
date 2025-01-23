import React, { Component } from 'react';
import { FaUtensils, FaClock, FaTags, FaTruck, FaHeadset } from 'react-icons/fa';

class About extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>About <span style={styles.blackText}>EatNow</span></h1>
        <div style={styles.card}>
          <p>
            Welcome to <strong style={styles.blackText}>EatNow</strong>, your go-to online food delivery platform that connects you with 
            your favorite restaurants in just a few clicks. Whether you're craving a quick bite or planning 
            a feast, EatNow ensures you get delicious food delivered to your doorstep, hot and fresh.
          </p>
        </div>
        <div style={styles.card}>
          <p>
            Founded with the mission to make food ordering easy, <strong style={styles.blackText}>EatNow</strong> partners with thousands of restaurants 
            across the city, offering a wide range of cuisines to satisfy every taste. From local favorites to 
            popular global chains, we've got it all.
          </p>
        </div>
        <div style={styles.card}>
          <p>
            Our platform is designed to provide a seamless experience with an intuitive interface, real-time 
            tracking, and secure payment options. We believe in bringing people closer to the food they love, 
            with convenience and reliability at the core of our service.
          </p>
        </div>
        <h2 style={styles.subHeading}>Why Choose <span style={styles.blackText}>EatNow?</span></h2>
        <div style={styles.featuresContainer}>
          <div style={styles.featureCard}>
            <FaUtensils style={styles.icon} />
            <h3>Vast Selection</h3>
            <p>
              Choose from a wide variety of restaurants and cuisines, ranging from local favorites to global chains.
            </p>
          </div>
          <div style={styles.featureCard}>
            <FaClock style={styles.icon} />
            <h3>Easy Ordering</h3>
            <p>
              Place your order in just a few clicks and enjoy real-time tracking of your food delivery.
            </p>
          </div>
          <div style={styles.featureCard}>
            <FaTags style={styles.icon} />
            <h3>Exclusive Deals</h3>
            <p>
              Enjoy special deals and discounts exclusive to <strong style={styles.blackText}>EatNow</strong> users, saving you money on every order.
            </p>
          </div>
          <div style={styles.featureCard}>
            <FaTruck style={styles.icon} />
            <h3>Fast Delivery</h3>
            <p>
              Get your food delivered hot and fresh, right to your doorstep, within the shortest time possible.
            </p>
          </div>
          <div style={styles.featureCard}>
            <FaHeadset style={styles.icon} />
            <h3>24/7 Support</h3>
            <p>
              Our friendly and efficient customer support team is always available to assist you, no matter the hour.
            </p>
          </div>
        </div>
        <div style={styles.card}>
          <p>
            Join millions of happy customers and experience the joy of hassle-free food delivery with 
            <strong style={styles.blackText}>EatNow</strong>.
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: "'Poppins', sans-serif",
    lineHeight: '1.8',
    color: 'black',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'black',
  },
  highlight: {
    color: 'rgb(252, 227, 138)',
  },
  blackText: {
    color: 'black',
  },
  subHeading: {
    fontSize: '2rem',
    margin: '40px 0 20px',
    fontWeight: '600',
    color: 'black',
  },
  card: {
    backgroundColor: 'rgb(252, 227, 138)',
    padding: '25px',
    margin: '20px 0',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  featuresContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '40px',
  },
  featureCard: {
    backgroundColor: 'black',
    color: 'rgb(252, 227, 138)',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '280px',
    flex: '1 1 280px',
    margin: '10px',
    transition: 'all 0.3s ease-in-out',
  },
  icon: {
    fontSize: '50px',
    color: 'rgb(252, 227, 138)',
    marginBottom: '15px',
  },
};

export default About;
