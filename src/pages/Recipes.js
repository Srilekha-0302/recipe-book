import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import RecipeModal from '../components/RecipeModal';
import AddRecipeForm from '../components/AddRecipeForm';
import Sidebar from '../components/Sidebar';

const Recipes = ({ recipes, onUpdateRating, onAddRecipe }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Recipes', icon: 'fa-utensils' },
    { id: 'breakfast', name: 'Breakfast', icon: 'fa-egg' },
    { id: 'lunch', name: 'Lunch', icon: 'fa-hamburger' },
    { id: 'dinner', name: 'Dinner', icon: 'fa-fish' },
    { id: 'desserts', name: 'Desserts', icon: 'fa-ice-cream' },
    { id: 'drinks', name: 'Drinks', icon: 'fa-glass-whiskey' }
  ];

  // Filter recipes based on selected category
  const filteredRecipes = selectedCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  const handleAddRecipe = (newRecipe) => {
    onAddRecipe(newRecipe);
    setShowAddForm(false);
  };

  return (
    <div className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
      <div className="main-content">
        <div className="recipes-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>
              {selectedCategory === 'all' ? 'All Recipes' : `${categories.find(cat => cat.id === selectedCategory)?.name}`}
              <span style={{ fontSize: '1rem', color: '#666', marginLeft: '10px' }}>
                ({filteredRecipes.length} recipes)
              </span>
            </h2>
            <button 
              className="btn btn-primary" 
              onClick={() => setShowAddForm(true)}
            >
              <i className="fas fa-plus"></i> Add New Recipe
            </button>
          </div>

          {/* Category Filter Buttons */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`btn ${selectedCategory === category.id ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedCategory(category.id)}
                style={{ fontSize: '0.9rem', padding: '8px 12px' }}
              >
                <i className={`fas ${category.icon}`} style={{ marginRight: '5px' }}></i>
                {category.name}
              </button>
            ))}
          </div>

          <div className="recipe-grid">
            {filteredRecipes.map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onViewRecipe={handleViewRecipe}
              />
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <h3>No recipes found in this category</h3>
              <p>Try selecting a different category or add some new recipes!</p>
            </div>
          )}
        </div>

        <Sidebar recipes={recipes} />
      </div>

      {selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe} 
          onClose={handleCloseModal}
          onUpdateRating={onUpdateRating}
        />
      )}

      {showAddForm && (
        <AddRecipeForm 
          onClose={() => setShowAddForm(false)}
          onAddRecipe={handleAddRecipe}
        />
      )}
    </div>
  );
};

export default Recipes;