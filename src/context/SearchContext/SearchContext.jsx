import {createContext, useEffect, useLayoutEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const SearchContext = createContext(null);


// eslint-disable-next-line react/prop-types
function SearchContextProvider({children}) {
    const [result, setResult] = useState(null);
    const [value, setValue] = useState(''); // Value of the search bar
    const [suggestions, setSuggestions] = useState([]);

    const navigate = useNavigate()

    console.log("suggestions", suggestions);

    const fetchData = async (value) => {
        try {
            const response = await axios.get(
                `https://dummyjson.com/products/search?q=${value}&limit=0&select=title,price,brand,thumbnail`
            );
            console.log("value in fetchData", value);
            setSuggestions(response.data.products); // Set suggestions based on API response
            console.log("response", response)
            console.log("response.data.result", response.data.products)

        } catch (err) {
            console.error(err);
        }
    };
    console.log("result", result)

    useEffect(() => {
        void fetchData();
    }, [value]);

    useEffect(() => {
        let id;
        if (result != null) {
            id = result.id.toString()
            navigate(`/product/${id}`)
        } else {
            console.log("id is not defined")
        }
    }, [result])

    const searchData = {
        result,
        value,
        setValue,
        suggestions, // Include suggestions in the context value
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
