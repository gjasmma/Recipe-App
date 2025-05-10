import React from 'react';

const RecipeList = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Recipe List</h2>
      {/* Example list of recipes */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Chocolate Cake</h3>
          <p>A delicious chocolate cake recipe...</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Spaghetti Bolognese</h3>
          <p>A classic spaghetti bolognese recipe...</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;