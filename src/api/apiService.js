import api from "./axiosConfig";


// More endpoints and documentation: https://www.themealdb.com/api.php


// Get meal by ID.

export const getMealById = async (id) => {
    try {

        const response = await api.get(`/lookup.php?i=${id}`);

        return response.data.meals?.[0] || null;

    } catch (error) {

        console.error("Error fetching meal by ID:", error);

        throw error;
    }
};


// Get random meal.

export const getRandomMeal = async () => {
    try {

        const response = await api.get("/random.php");

        return response.data.meals?.[0] || null;

    } catch (error) {

        console.error("Error fetching random meal:", error);

        throw error;
    }
};


// Search for a meal by name.

export const searchMealByName = async (mealName) => {

    try {

        const response = await api.get(`/search.php?s=${mealName}`);

        return response.data.meals || [];

    } catch (error) {

        console.error("Error searching for meal:", error);

        throw error;
    }
};


// Get categories.

export const getCategories = async () => {

    try {

        const response = await api.get("/categories.php");

        return response.data.categories || [];

    } catch (error) {

        console.error("Error fetching categories:", error);

        throw error;
    }
};

// Get meals by category

export const getMealsByCategory = async (category) => {

    try {

        const response = await api.get(`/filter.php?c=${category}`);

        return response.data.meals || [];

    } catch (error) {

        console.error("Error fetching meals by category:", error);

        throw error;
    }
};