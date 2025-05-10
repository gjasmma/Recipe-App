const API_URL = 'https://your-api-url.com/recipes'; // Replace with your API

export const fetchRecipes = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};