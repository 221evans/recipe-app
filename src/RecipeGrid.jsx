// eslint-disable-next-line no-unused-vars
import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeGrid.css';


// eslint-disable-next-line react/prop-types
const RecipeGrid = ({recipes}) => (
    <div className="recipe-grid">
        {/* eslint-disable-next-line react/prop-types */}
        {recipes.map((recipe) => (
            <RecipeCard
                key={recipe.id}
                title={recipe.title}
                description={recipe.summary || "No description available"}
                image={recipe.image}
            />
        ))}
    </div>
)

export default RecipeGrid;