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

    const handleSearch = (results) => {
        setRecipes(results);
    };

    const handleRecipeClick = async (recipeId) => {
        try{
            const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
            const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
                params: {
                    apiKey: apiKey
                },
            });
            console.log('API Response:', response.data);
            setSelectedRecipe(response.data);

        } catch (error) {
            console.error('Error fetching recipe information from Spoonacular API', error);
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
