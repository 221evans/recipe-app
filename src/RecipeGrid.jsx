// eslint-disable-next-line no-unused-vars
import React from 'react';
import './RecipeGrid.css';


// eslint-disable-next-line react/prop-types
const RecipeGrid = ({ recipes, onRecipeClick }) => {
    return (
        <div className="recipe-grid">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card" onClick={() => onRecipeClick(recipe.id)}>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
            ))}
        </div>
    );
};
export default RecipeGrid;