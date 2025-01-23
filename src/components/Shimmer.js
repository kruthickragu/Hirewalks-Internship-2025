import React from 'react';
import './Shimmer.css';

const Shimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-thumbnail"></div>
      <div className="shimmer-line shimmer-line-short"></div>
      <div className="shimmer-line shimmer-line-long"></div>
      <div className="shimmer-line shimmer-line-medium"></div>
    </div>
  );
};

export default Shimmer;
