import React from 'react';
import './RecipeDetails.css';
import stripHTMLTags from "./stipHTMLTags";
import PropTypes from "prop-types";


const RecipeDetails = ({ recipe, onClose }) => {
    const plainSummary = stripHTMLTags(recipe.summary);

    console.log(plainSummary);

    return (
        <div className="recipe-details">
            <button onClick={onClose} className="close-btn">x</button>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <p>{plainSummary}</p>
            <ul>
                <li>Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}</li>
                <li>Vegan: {recipe.vegan ? 'Yes' : 'No'}</li>
                <li>Gluten Free: {recipe.glutenFree ? 'Yes' : 'No'}</li>
                <li>Dairy Free: {recipe.dairyFree ? 'Yes' : 'No'}</li>
                <li>Preparation Time: {recipe.readyInMinutes} minutes</li>
                <li>Servings: {recipe.servings}</li>
            </ul>
        </div>
    );
};

RecipeDetails.propTypes = {
    recipe: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        vegetarian: PropTypes.bool,
        vegan: PropTypes.bool,
        glutenFree: PropTypes.bool,
        dairyFree: PropTypes.bool,
        readyInMinutes: PropTypes.number.isRequired,
        servings: PropTypes.number.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};


export default RecipeDetails;