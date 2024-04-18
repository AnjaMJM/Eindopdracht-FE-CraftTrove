import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const SearchContext = createContext(null);

// Data in één keer binnenhalen en opslaan in [ result ]
// Alle mogelijke zoekwoorden verzamelen uit designers.craft_type, designers.patterns.craft_type en designers.patterns.keywords [ searchOptions ] --> array met zoekwoorden, om te gebruiken voor searchbar.
// Nadat een searchOption is gekozen, wordt met find het bijbehorende object/objecten opgehaald en in een productCard gezet op de Overview-pagina




// eslint-disable-next-line react/prop-types
function SearchContextProvider({ children }) {
    const [result, setResult] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    // const [selectedResult, setSelectedResult] = useState(null);



    const fetchData = async (value) => {
        try {
            const response = await axios.get(
                `https://dummyjson.com/products/search?q=${value}`
            );
            setSuggestions(response.data); // Set suggestions based on API response
            setResult(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        void fetchData();
    }, []);

    // const handleSelectedResult = (suggestions) => {
    //     setSelectedResult(suggestions);
    //     navigate("/product")
    // }


    const searchData = {
        products: result,
        suggestions: suggestions, // Include suggestions in the context value
        setResult,
        fetchData,
        // handleSelectedResult,
    };

    return (
        <SearchContext.Provider value={searchData}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;
