import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, locality, avgRating, cloudinaryImageId, deliveryTime, costForTwo } = restaurant;
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

  // Check if cuisines is an array or string and handle accordingly
  const cuisinesList = Array.isArray(cuisines) ? cuisines.join(', ') : cuisines.split(',').map(cuisine => cuisine.trim()).join(', ');

  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="cardImage" />
      <div className="cardContent">
        <h3 className="cardTitle">{name}</h3>
        <p className="cardDescription">{cuisinesList}</p>
        <p className="cardDescription">{locality}</p>
        <p className="cardDescription">{costForTwo}</p>
        <p className="cardDescription">{deliveryTime}</p>

        <div className="cardFooter">
          <span className="rating">Rating: {avgRating || 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
