import React, { useState } from 'react';

const RecipeModal = ({ recipe, onClose, onUpdateRating }) => {
  const [currentRating, setCurrentRating] = useState(recipe.rating);

  const StarRating = ({ rating, interactive = false, onRate }) => {
    const handleStarClick = (value) => {
      if (interactive && onRate) {
        setCurrentRating(value);
        onRate(value);
      }
    };

    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'active' : ''} ${interactive ? 'interactive' : ''}`}
            onClick={() => interactive && handleStarClick(star)}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const handleRateRecipe = (newRating) => {
    onUpdateRating(recipe.id, newRating);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{recipe.title}</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <div 
            className="recipe-detail-image" 
            style={{backgroundImage: `url('${recipe.image}')`}}
          ></div>
          <div className="recipe-detail-meta">
            <span><i className="fas fa-clock"></i> Prep: {recipe.prepTime} mins | Cook: {recipe.cookTime} mins</span>
            <span><i className="fas fa-user-friends"></i> Serves: {recipe.servings}</span>
          </div>
          
          <div className="ingredients-section">
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          
          <div className="instructions-section">
            <h3>Instructions</h3>
            <ol className="instructions-list">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
          
          <div className="rating-section">
            <h3>Rate this Recipe</h3>
            <StarRating 
              rating={currentRating} 
              interactive={true} 
              onRate={handleRateRecipe}
            />
            <p>Your rating: <span id="current-rating">{currentRating}</span>/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;