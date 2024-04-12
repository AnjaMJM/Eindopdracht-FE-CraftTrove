import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SearchContext = createContext(null);

function SearchContextProvider({ children }) {
    const [result, setResult] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const fetchData = async (value) => {
        try {
            const data = await axios.get(
                `https://dummyjson.com/products/search?q=${value}&limit=10`
            );
            setSuggestions(data.data); // Set suggestions based on API response
            setResult(data.data); // Optionally, you can set the result as well
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        void fetchData("");
    }, []);

    const searchData = {
        products: result,
        suggestions: suggestions, // Include suggestions in the context value
        setResult,
        fetchData,
    };

    return (
        <SearchContext.Provider value={searchData}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;
