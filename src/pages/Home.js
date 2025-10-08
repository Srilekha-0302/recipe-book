import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ recipes }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Filter recipes based on selected category
  const filteredRecipes = selectedCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  const popularRecipes = recipes.slice(0, 6);

  // Fixed StarRating component
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

  const categories = [
    { id: 'all', name: 'All Recipes', icon: 'fa-utensils' },
    { id: 'breakfast', name: 'Breakfast', icon: 'fa-egg' },
    { id: 'lunch', name: 'Lunch', icon: 'fa-hamburger' },
    { id: 'dinner', name: 'Dinner', icon: 'fa-fish' },
    { id: 'desserts', name: 'Desserts', icon: 'fa-ice-cream' },
    { id: 'drinks', name: 'Drinks', icon: 'fa-glass-whiskey' }
  ];

  // Debug: Check what recipes we have
  console.log("Total recipes:", recipes.length);
  console.log("Selected category:", selectedCategory);
  console.log("Filtered recipes:", filteredRecipes.length);
  categories.forEach(cat => {
    if (cat.id !== 'all') {
      const count = recipes.filter(r => r.category === cat.id).length;
      console.log(`${cat.name}: ${count} recipes`);
    }
  });

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Cooked in Code, Served with Flavor</h1>
          <p>Join me in my love of food & drink!</p>
        </div>
      </section>

      <div className="container">
        <div className="main-content">
          <div className="recipes-section">
            <div style={{ alignItems: 'center', marginBottom: '20px' }}>
              <h2>
                {selectedCategory === 'all' ? 'Featured Recipes' : `${categories.find(cat => cat.id === selectedCategory)?.name}`}
                <span style={{ fontSize: '1rem', color: '#666', marginLeft: '10px' }}>
                  ({filteredRecipes.length} recipes)
                </span>
              </h2>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`btn ${selectedCategory === category.id ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setSelectedCategory(category.id)}
                    style={{ fontSize: '0.9rem', padding: '8px 12px' }}
                  >
                    <i className={`fas ${category.icon}`} style={{ marginRight: '5px' }}></i>
                    {category.name}
                    <span style={{ marginLeft: '5px', fontSize: '0.8rem' }}>
                      ({category.id === 'all' ? recipes.length : recipes.filter(r => r.category === category.id).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="recipe-grid">
              {filteredRecipes.map(recipe => (
                <div key={recipe.id} className="recipe-card">
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
                      <Link to="/recipes" className="btn btn-primary">View Recipe</Link>
                      <Link to="/recipes" className="btn btn-secondary">Rate</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredRecipes.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                <h3>No recipes found in this category</h3>
                <p>Try selecting a different category or add some new recipes!</p>
                <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#999' }}>
                  <p>Debug Info:</p>
                  <p>Total recipes in app: {recipes.length}</p>
                  <p>Selected category: {selectedCategory}</p>
                </div>
              </div>
            )}

            <div style={{textAlign: 'center', marginTop: '30px'}}>
              <Link to="/recipes" className="btn btn-primary">
                View All Recipes
              </Link>
            </div>
          </div>

          <div className="sidebar">
            <div className="sidebar-section">
              <h3>Categories</h3>
              <ul className="categories-list">
                {categories.filter(cat => cat.id !== 'all').map(category => (
                  <li key={category.id}>
                    <a 
                      href="#!" 
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedCategory(category.id);
                      }}
                      style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
                    >
                      <span>
                        <i className={`fas ${category.icon}`}></i> {category.name}
                      </span>
                      <span style={{ color: '#666', fontSize: '0.8rem' }}>
                        ({recipes.filter(r => r.category === category.id).length})
                      </span>
                    </a>
                  </li>
                ))}
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
                      <div className="rating">
                        <StarRating rating={recipe.rating} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Recipe of the Week</h3>
              <p>Check out our featured recipe every week with new and exciting flavors to try in your kitchen!</p>
              <Link to="/recipes" className="btn btn-secondary" style={{marginTop: '15px', width: '100%', display: 'block', textAlign: 'center'}}>
                View Recipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;