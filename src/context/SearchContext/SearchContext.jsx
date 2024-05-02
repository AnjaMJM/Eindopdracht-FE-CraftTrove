import {createContext, useEffect, useLayoutEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDebounce} from "../../hooks/useDebounce.js";


export const SearchContext = createContext(null);


// eslint-disable-next-line react/prop-types
function SearchContextProvider({children}) {
    const [result, setResult] = useState(null);
    const [value, setValue] = useState(""); // Value of the search bar
    const [suggestions, setSuggestions] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const fetchData = async (value) => {
        toggleError(false)
        setLoading(true)
        try {
            const response = await axios.get(
                `https://dummyjson.com/products/search?q=${value}&limit=0&select=title,price,brand,thumbnail`
            );
            setSuggestions(response.data.products); // Set suggestions based on API response
        } catch (err) {
            console.error(err);
            toggleError(true)
        }
        setLoading(false)
    };

    useDebounce(
        async () => {
            try {
                await fetchData(value);
            } catch (err) {
                console.error("useDebounce error:", err);
            }
        },
        1000,
        [value]
    );

    useEffect(() => {
        let id;
        if (result != null) {
            id = result.id.toString()
            navigate(`/product/${id}`)
        }
    }, [result])

    const searchData = {
        value,
        setValue,
        suggestions,
        setResult,
        loading,
        error
    };

    return (
        <SearchContext.Provider value={searchData}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;
