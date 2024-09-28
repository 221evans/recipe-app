import './App.css'
import Header from "./Header.jsx";
import SearchBar from "./SearchBar.jsx";
import RecipeGrid from "./RecipeGrid.jsx";
import {useState} from "react";


function App() {

    const [recipes, setRecipes] = useState([]);

    const handleSearch = (results) => {
        setRecipes(results);
    };


    return (
    <>
        <Header />
        <SearchBar onSearch={handleSearch}/>
        <RecipeGrid recipes={recipes}/>
    </>
  )
}

export default App
