import React from 'react';

const RecipeCard = ({ recipe, onViewRecipe }) => {
  const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = Math.max(0, 5 - Math.ceil(rating));

  return (
    <div style={{ display: 'inline-block', marginRight: '8px' }}>
      {Array.from({ length: fullStars }, (_, i) => (
        <i key={`full-${i}`} className="fas fa-star"></i>
      ))}
      {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
      {Array.from({ length: emptyStars }, (_, i) => (
        <i key={`empty-${i}`} className="far fa-star"></i>
      ))}
      <span style={{ marginLeft: '5px' }}>{rating}</span>
    </div>
  );
};

  return (
    <div className="recipe-card">
      <div 
        className="recipe-image" 
        style={{backgroundImage: `url('${recipe.image}')`}}
      ></div>
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        <div className="recipe-meta">
          <span><i className="fas fa-clock"></i> {recipe.prepTime + recipe.cookTime} mins</span>
          <span><i className="fas fa-user-friends"></i> {recipe.servings} servings</span>
        </div>
        <div className="recipe-rating">
          <StarRating rating={recipe.rating} />
        </div>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-actions">
          <button 
            className="btn btn-primary" 
            onClick={() => onViewRecipe(recipe)}
          >
            View Recipe
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => onViewRecipe(recipe)}
          >
            Rate
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;