import './App.css'
import Header from "./Header.jsx";
import SearchBar from "./SearchBar.jsx";
import RecipeGrid from "./RecipeGrid.jsx";
import RecipeDetails from "./RecipeDetails.jsx";
import {useState} from "react";
import axios from "axios";


function App() {

    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleSearch = async (query) => {
        try {
            const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
            const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
                params: { apiKey, query },
            });
            console.log('Search Results:', response.data.results);
            setRecipes(response.data.results);
        } catch (error) {
            console.error('Error fetching search results from Spoonacular API', error);
        }
    };

    const handleRecipeClick = async (recipeId) => {
     try{
         const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
         const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
             params: {apiKey},
         });
         console.log('Recipe Details:', response.data);

         // Ensure we have detailed information like 'title', 'image' etc.
         setSelectedRecipe({
             title: response.data.title,
             image: response.data.image,
             summary: response.data.summary,
             vegetarian: response.data.vegetarian,
             vegan: response.data.vegan,
             glutenFree: response.data.glutenFree,
             dairyFree: response.data.dairyFree,
             readyInMinutes: response.data.readyInMinutes,
             servings: response.data.servings
         });
     } catch (error) {
         console.log(error);
     }
    };

    const handleCloseDetails = () => {
        setSelectedRecipe(null);
    }


    return (
    <>
        <Header />

        <SearchBar onSearch={handleSearch}/>
        <RecipeGrid recipes={recipes} onRecipeClick={handleRecipeClick}/>
        {selectedRecipe && <RecipeDetails recipe={selectedRecipe}
                                          onClose={handleCloseDetails}/>}
    </>
  )
}

export default App
