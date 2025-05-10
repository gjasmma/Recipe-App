import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 m-4 hover:shadow-2xl transition duration-300 ease-in-out">
      <h3 className="text-xl font-semibold text-gray-900">{recipe.name}</h3>
      <p className="text-sm text-gray-600 mt-2">{recipe.ingredients}</p>
      <p className="text-sm text-gray-600 mt-2">{recipe.instructions}</p>
      {recipe.imageUrl && (
        <img
          src={recipe.imageUrl}
          alt={recipe.name}
          className="mt-4 rounded-md w-full h-48 object-cover"
        />
      )}
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
          View Details
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200">
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;