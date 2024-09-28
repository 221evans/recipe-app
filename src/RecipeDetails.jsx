import React from 'react';
import DOMPurify from 'dompurify';
import './RecipeDetails.css';
import processSummaryLinks from './processSummaryLinks'; // Import the link processing function

const RecipeDetails = ({ recipe, onClose }) => {
    const rawSummary = recipe.summary;
    const processedSummary = processSummaryLinks(rawSummary);
    const sanitizedSummary = DOMPurify.sanitize(processedSummary);

    console.log('Sanitized and Processed Summary:', sanitizedSummary); // Log to confirm sanitized and processed content

    return (
        <div className="recipe-details">
            <button onClick={onClose}>Close</button>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <div dangerouslySetInnerHTML={{ __html: sanitizedSummary }}></div>
        </div>
    );
};

export default RecipeDetails;