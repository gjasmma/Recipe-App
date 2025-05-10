const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes for recipes
router.get('/recipes', recipeController.getRecipes); // Get all recipes
router.post('/recipes', recipeController.addRecipe); // Add new recipe

module.exports = router;