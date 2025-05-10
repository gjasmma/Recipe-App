import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  // Fetch recipes from the backend
  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  // Add a new recipe
  const addRecipe = async (e) => {
    e.preventDefault();

    const newRecipe = {
      name: recipeName,
      ingredients,
      instructions,
    };

    try {
      await axios.post('http://localhost:5000/recipes', newRecipe);
      fetchRecipes(); // Refresh the recipe list
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  // Call fetchRecipes on mount to display existing recipes
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>

      {/* Recipe Form */}
      <form onSubmit={addRecipe}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <button type="submit">Add Recipe</button>
      </form>

      {/* Recipe List */}
      <div>
        <h2>Recipe List</h2>
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;