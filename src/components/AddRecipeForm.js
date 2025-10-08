import React, { useState } from 'react';

const AddRecipeForm = ({ onClose, onAddRecipe }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    category: 'dinner',
    description: ''
  });
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState(['']);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleInstructionChange = (index, value) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const addInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const removeIngredient = (index) => {
    if (ingredients.length > 1) {
      const newIngredients = ingredients.filter((_, i) => i !== index);
      setIngredients(newIngredients);
    }
  };

  const removeInstruction = (index) => {
    if (instructions.length > 1) {
      const newInstructions = instructions.filter((_, i) => i !== index);
      setInstructions(newInstructions);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newRecipe = {
      ...formData,
      prepTime: parseInt(formData.prepTime),
      cookTime: parseInt(formData.cookTime),
      servings: parseInt(formData.servings),
      ingredients: ingredients.filter(ing => ing.trim() !== ''),
      instructions: instructions.filter(inst => inst.trim() !== ''),
      rating: 0
    };

    onAddRecipe(newRecipe);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add New Recipe</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="recipe-title">Recipe Title</label>
              <input 
                type="text" 
                id="recipe-title" 
                name="title"
                className="form-control" 
                value={formData.title}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="recipe-image">Image URL</label>
              <input 
                type="text" 
                id="recipe-image" 
                name="image"
                className="form-control" 
                placeholder="https://example.com/image.jpg"
                value={formData.image}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="prep-time">Prep Time (minutes)</label>
                <input 
                  type="number" 
                  id="prep-time" 
                  name="prepTime"
                  className="form-control" 
                  value={formData.prepTime}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="cook-time">Cook Time (minutes)</label>
                <input 
                  type="number" 
                  id="cook-time" 
                  name="cookTime"
                  className="form-control" 
                  value={formData.cookTime}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="servings">Servings</label>
                <input 
                  type="number" 
                  id="servings" 
                  name="servings"
                  className="form-control" 
                  value={formData.servings}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select 
                id="category" 
                name="category"
                className="form-control" 
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="recipe-description">Description</label>
              <textarea 
                id="recipe-description" 
                name="description"
                className="form-control" 
                value={formData.description}
                onChange={handleInputChange}
                required 
              ></textarea>
            </div>
            
            <div className="form-group">
              <label>Ingredients</label>
              <div id="ingredients-container">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="ingredient-row">
                    <input 
                      type="text" 
                      className="form-control ingredient-input" 
                      placeholder="Ingredient" 
                      value={ingredient}
                      onChange={(e) => handleIngredientChange(index, e.target.value)}
                      required 
                    />
                    <button 
                      type="button" 
                      className="remove-btn"
                      onClick={() => removeIngredient(index)}
                    >
                      -
                    </button>
                  </div>
                ))}
              </div>
              <button type="button" className="add-btn" onClick={addIngredient}>
                Add Ingredient
              </button>
            </div>
            
            <div className="form-group">
              <label>Instructions</label>
              <div id="instructions-container">
                {instructions.map((instruction, index) => (
                  <div key={index} className="instruction-row">
                    <input 
                      type="text" 
                      className="form-control instruction-input" 
                      placeholder="Instruction step" 
                      value={instruction}
                      onChange={(e) => handleInstructionChange(index, e.target.value)}
                      required 
                    />
                    <button 
                      type="button" 
                      className="remove-btn"
                      onClick={() => removeInstruction(index)}
                    >
                      -
                    </button>
                  </div>
                ))}
              </div>
              <button type="button" className="add-btn" onClick={addInstruction}>
                Add Instruction
              </button>
            </div>
            
            <div style={{textAlign: 'center', marginTop: '30px'}}>
              <button type="submit" className="btn btn-primary">Save Recipe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;