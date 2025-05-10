import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  // Mock data
  const recipe = {
    title: 'Vegan Pasta',
    category: 'Vegan',
    ingredients: ['Pasta', 'Tomatoes', 'Olive oil', 'Garlic'],
    instructions: 'Boil pasta, cook garlic, mix ingredients, and serve.',
    imageUrl: 'https://via.placeholder.com/150',
    comments: ['Love this!', 'So tasty!'],
    ratings: 4,
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold mb-6">{recipe.title}</h2>
      <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <div>
        <h3 className="text-xl font-semibold">Ingredients:</h3>
        <ul className="list-disc pl-6">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mt-4">Instructions:</h3>
        <p>{recipe.instructions}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Comments:</h3>
        {recipe.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
      <div className="mt-4">
        <span className="text-yellow-500">⭐ {recipe.ratings}</span>
      </div>
    </div>
  );
};

export default RecipeDetail;