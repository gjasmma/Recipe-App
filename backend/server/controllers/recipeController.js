const Recipe = require('../models/recipeModel');

// Get all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new recipe
const addRecipe = async (req, res) => {
  const { name, ingredients, instructions } = req.body;

  const newRecipe = new Recipe({
    name,
    ingredients,
    instructions,
  });

  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getRecipes,
  addRecipe,
};