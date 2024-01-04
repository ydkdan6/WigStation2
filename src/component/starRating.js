import React from 'react';

const StarRating = ({ totalStars, rating }) => {
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'text-warning' : 'text-muted'}`}
        >
          &#9733; {/* Unicode for a solid star */}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
