import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import './RestaurantList.css';

const RestaurantList = ({ searchQuery }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [highlyRated, setHighlyRated] = useState(false); // Added state for highly rated filter

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          'https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=11.664325&lng=78.1460142&carousel=true&third_party_vendor=1'
        );
        const result = await response.json();

        console.log('API Response:', result);

        const fetchedRestaurants =
          result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

        if (fetchedRestaurants && fetchedRestaurants.length > 0) {
          setRestaurants(fetchedRestaurants);
        } else {
          setError('No restaurants found');
        }
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Filter restaurants based on search query
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const { name, cuisines, locality,avgRating} = restaurant.info;
  
    // Join the cuisines array into a string and convert it to lowercase
    const cuisinesString = Array.isArray(cuisines) ? cuisines.join(' ').toLowerCase() : '';
    
    // Filter based on rating if highlyRated is true
    const matchesRating = highlyRated ? avgRating && avgRating >= 4.5 : true;

    return (
      (name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cuisinesString.includes(searchQuery.toLowerCase()) ||
      locality.toLowerCase().includes(searchQuery.toLowerCase())) &&
      matchesRating
    );
  });

  return (
    <div className='body-con'>
      <h1 className='heading'>Restaurants Near You</h1>
      
      {/* Highly Rated Button */}
      <button 
        className="highly-rated-btn"
        onClick={() => setHighlyRated(!highlyRated)}
      >
        {highlyRated ? 'Show All Restaurants' : 'Show Highly Rated (4.5+)'}
      </button>
      
      <div className="restaurant-list">
        {loading &&
          Array.from({ length: 6 }).map((_, index) => (
            <div className="restaurant-card" key={index}>
              <Shimmer />
            </div>
          ))}
        {error && <p>{error}</p>}
        {!loading && filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <div className="restaurant-card" key={restaurant.info.id}>
              <RestaurantCard restaurant={restaurant.info} />
            </div>
          ))
        ) : (
          !loading && <p>No restaurants available</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
