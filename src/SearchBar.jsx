// src/components/SearchBar.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (query) {
            try {
                const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY; // Use VITE_SPOONACULAR_API_KEY
                console.log('API Key:', apiKey); // Check if the API key is being read correctly
                console.log('Search Query:', query); // Check if the search query is being captured

                const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
                    params: {
                        query: query,
                        apiKey: apiKey
                    }
                });
                console.log('API Response:', response.data); // Log the API response
                onSearch(response.data.results);
            } catch (error) {
                console.error('Error fetching data from Spoonacular API', error);
            }
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for recipes..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;