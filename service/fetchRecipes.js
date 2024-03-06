import axios from 'axios';

// Function to fetch recipes based on ingredients
export const fetchRecipesByIngredients = async (ingredients) => {
    const url = `https://app-backend-puce.vercel.app/?ingredients=${ingredients}`; // Replace with your actual API endpoint

    try {
        const response = await axios.get(url);
        console.log("response",response)
        return response.data; // The API response data
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error; // Handle the error appropriately in your app
    }
};
export  const fetchRecipesByComplexSearch = async (ingredients,maxProtein,maxCarbs) => {
    const url = `https://app-backend-puce.vercel.app/?includeIngredients=${ingredients}&maxProtein=${maxProtein}&maxCarbs=${maxCarbs}`; // Replace with your actual API endpoint

    try {
        const response = await axios.get(url);
        console.log("response",response)
        return response.data; // The API response data
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error; // Handle the error appropriately in your app
    }
}

export  const fetchRecipeById = async (id) => {
    const url = `https://app-backend-puce.vercel.app/recipe/?id=${id}`; // Replace with your actual API endpoint

    try {
        const response = await axios.get(url);
        console.log("response",response)
        return response.data; // The API response data
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error; // Handle the error appropriately in your app
    }
}
