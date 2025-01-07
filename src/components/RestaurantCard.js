import React from 'react';
import './RestaurantCard.css'; 

const RestaurantCard = ({ restaurant }) => {
  const { name, description, rating, image } = restaurant;

  return (
    <div className="card">
      <img src={image} alt={name} className="cardImage" />
      <div className="cardContent">
        <h3 className="cardTitle">{name}</h3>
        <p className="cardDescription">{description}</p>
        <div className="cardFooter">
          <span className="rating">Rating: {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
