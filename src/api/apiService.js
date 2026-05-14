import api from "./axiosConfig";


// Fler endpoints och dokumentation: https://www.themealdb.com/api.php


// Hämta måltid med ID.

export const getMealById = async (id) => {
  try {

    const response = await api.get( `/lookup.php?i=${id}` );

    return response.data.meals[0];

  } catch (error) {

    console.error("Fel vid hämtning av måltid med ID:", error);

    throw error;
  }
};


// Hämta slumpad måltid.

export const getRandomMeal = async () => {
  try {

    const response = await api.get( "/random.php" );

    return response.data.meals[0];

  } catch (error) {

    console.error("Fel vid slumpad måltid:", error);

    throw error;
  }
};


// Söka efter måltid med dess namn.

export const searchMealByName = async (mealName) => {

  try {

    const response = await api.get( `/search.php?s=${mealName}` );

    return response.data.meals || [];

  } catch (error) {

    console.error("Fel vid sökning av måltid:", error);

    throw error;
  }
};


// Hämta kategorier.

export const getCategories = async () => {

  try {

    const response = await api.get( "/categories.php" );

    return response.data.categories || [];

  } catch (error) {

    console.error("Fel vid hämtning av kategorier:", error);

    throw error;
  }
};
