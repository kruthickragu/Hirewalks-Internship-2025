import React from 'react';
import RestaurantList from './RestaurantList';

const Body = () => {
  return (
    <div style={styles.bodyContainer}>
      <RestaurantList />
    </div>
  );
};

const styles = {
  bodyContainer: {
    padding: '20px',
    backgroundColor: '#f8f8f8',
    minHeight: '100vh',
  }
};

export default Body;
