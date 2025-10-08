import React from 'react';

const Sidebar = ({ recipes }) => {
  const popularRecipes = recipes.slice(0, 3);

  const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = Math.max(0, 5 - Math.ceil(rating));

  return (
    <div style={{ color: '#f8b500', fontSize: '0.8rem' }}>
      {Array.from({ length: fullStars }, (_, i) => (
        <i key={`full-${i}`} className="fas fa-star"></i>
      ))}
      {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
      {Array.from({ length: emptyStars }, (_, i) => (
        <i key={`empty-${i}`} className="far fa-star"></i>
      ))}
    </div>
  );
};

  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h3>Categories</h3>
        <ul className="categories-list">
          <li><a href="#breakfast"><i className="fas fa-utensils"></i> Breakfast</a></li>
          <li><a href="#lunch"><i className="fas fa-drumstick-bite"></i> Lunch</a></li>
          <li><a href="#dinner"><i className="fas fa-fish"></i> Dinner</a></li>
          <li><a href="#desserts"><i className="fas fa-ice-cream"></i> Desserts</a></li>
          <li><a href="#drinks"><i className="fas fa-glass-whiskey"></i> Drinks</a></li>
        </ul>
      </div>

      <div className="sidebar-section">
        <h3>Popular Recipes</h3>
        <div className="popular-recipes">
          {popularRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-item">
              <div 
                className="recipe-image" 
                style={{backgroundImage: `url('${recipe.image}')`}}
              ></div>
              <div className="recipe-info">
                <h4>{recipe.title}</h4>
                <StarRating rating={recipe.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Recipe of the Week</h3>
        <p>Check out our featured recipe every week with new and exciting flavors to try in your kitchen!</p>
        <button className="btn btn-secondary" style={{marginTop: '15px', width: '100%'}}>
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default Sidebar;