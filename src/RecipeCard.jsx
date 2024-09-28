// eslint-disable-next-line no-unused-vars
import React from 'react';
import './RecipeCard.css';

// eslint-disable-next-line react/prop-types
const RecipeCard = ({title,description,image}) =>
    (
        <div className="recipe-card">
            <img src={image} alt={title} className="recipe-image" />
            <div className="recipe-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

        </div>
    )


export default RecipeCard;