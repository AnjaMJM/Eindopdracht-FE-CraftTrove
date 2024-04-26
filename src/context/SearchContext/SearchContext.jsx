import {createContext, useEffect, useLayoutEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const SearchContext = createContext(null);


// eslint-disable-next-line react/prop-types
function SearchContextProvider({children}) {
    const [result, setResult] = useState(null);
    const [value, setValue] = useState(''); // Value of the search bar
    const [suggestions, setSuggestions] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);

    const navigate = useNavigate()

    const fetchData = async (value) => {
        try {
            const response = await axios.get(
                `https://dummyjson.com/products/search?q=${value}&limit=10`
            );
            console.log("value in fetchData", value);
            setSuggestions(response.data.products); // Set suggestions based on API response
            console.log("response", response)
            console.log("response.data.result", response.data.products)

        } catch (err) {
            console.error(err);
        }
    };
    // console.log("result ID", resultId)
    console.log("result", result)
    // console.log("suggestions context", suggestions)

    // useEffect(() => {
    //     console.log("value", value);
    // }, []);


    useEffect(() => {
        void fetchData();
    }, [value]);

    const handleSelectedResult = (suggestions) => {
        setSelectedResult(suggestions);
        navigate("/overview")
    }

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
        handleSelectedResult,
    };

    return (
        <SearchContext.Provider value={searchData}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;
