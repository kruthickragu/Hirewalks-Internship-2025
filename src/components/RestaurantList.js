import React from 'react';
import RestaurantCard from './RestaurantCard';
import './RestaurantList.css'; 

const RestaurantList = () => {
  const restaurants = [
    { id: 1, name: 'Seashell', description: 'Delicious food', rating: 4.5, image: 'https://b.zmtcdn.com/data/pictures/1/19855441/344b23781bfb41764c64ca3e33bca536_o2_featured_v2.jpg?output-format=webp' },
    { id: 2, name: 'Mc Donalds', description: 'Tasty dishes', rating: 4.7, image: 'https://b.zmtcdn.com/data/pictures/8/20350758/f96313e9985754995d250754f8622250_o2_featured_v2.jpg?output-format=webp' },
    { id: 3, name: 'Unique Sushi', description: 'Best dining experience', rating: 4.2, image: 'https://b.zmtcdn.com/data/pictures/3/20936373/a88aaf387a1422db6a2aee91384d30ac_featured_v2.jpg' },
    { id: 4, name: 'Seashell', description: 'Delicious food', rating: 4.5, image: 'https://b.zmtcdn.com/data/pictures/1/19855441/344b23781bfb41764c64ca3e33bca536_o2_featured_v2.jpg?output-format=webp' },
    { id: 5, name: 'Mc Donalds', description: 'Tasty dishes', rating: 4.7, image: 'https://b.zmtcdn.com/data/pictures/8/20350758/f96313e9985754995d250754f8622250_o2_featured_v2.jpg?output-format=webp' },
    { id: 6, name: 'Unique Sushi', description: 'Best dining experience', rating: 4.2, image: 'https://b.zmtcdn.com/data/pictures/3/20936373/a88aaf387a1422db6a2aee91384d30ac_featured_v2.jpg' },
    { id: 4, name: 'Seashell', description: 'Delicious food', rating: 4.5, image: 'https://b.zmtcdn.com/data/pictures/1/19855441/344b23781bfb41764c64ca3e33bca536_o2_featured_v2.jpg?output-format=webp' },
    { id: 5, name: 'Mc Donalds', description: 'Tasty dishes', rating: 4.7, image: 'https://b.zmtcdn.com/data/pictures/8/20350758/f96313e9985754995d250754f8622250_o2_featured_v2.jpg?output-format=webp' },
    { id: 6, name: 'Unique Sushi', description: 'Best dining experience', rating: 4.2, image: 'https://b.zmtcdn.com/data/pictures/3/20936373/a88aaf387a1422db6a2aee91384d30ac_featured_v2.jpg' }
  ];

  return (
    <div className="restaurant-list">
      {restaurants.map(restaurant => (
        <div className="restaurant-card" key={restaurant.id}>
          <RestaurantCard restaurant={restaurant} />
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
