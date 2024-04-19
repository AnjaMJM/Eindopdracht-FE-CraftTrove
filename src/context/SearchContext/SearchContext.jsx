import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const SearchContext = createContext(null);

// Data in één keer binnenhalen en opslaan in [ result ]
// Alle mogelijke zoekwoorden verzamelen uit designers.craft_type, designers.patterns.craft_type en designers.patterns.keywords [ searchOptions ] --> array met zoekwoorden, om te gebruiken voor searchbar.
// Nadat een searchOption is gekozen, wordt met find het bijbehorende object/objecten opgehaald en in een productCard gezet op de Overview-pagina




// eslint-disable-next-line react/prop-types
function SearchContextProvider({ children }) {
    const [result, setResult] = useState(null);
    const [resultId, setResultId] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);

const navigate = useNavigate()
    // const id = result.id.toString()

    const fetchData = async (value) => {
        try {
            const response = await axios.get(
                `https://dummyjson.com/products/search?q=${value}&limit=10`
            );
            console.log("value in fetchData", value);
            setSuggestions(response.data.products); // Set suggestions based on API response
            // setResult(response.data);
            // setResultId(response.data.products[0].id)
            console.log("response", response)
            console.log("response.products.data.id",response.data.products[0].id)
            console.log("response.data.products", response.data.products)

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
    }, []);

    const handleSelectedResult = (suggestions) => {
        setSelectedResult(suggestions);
        navigate("/overview")
    }

    useEffect ( () => {
    let id;
    if (result != null) {
        id = result.id.toString()
        navigate(`/product/${id}`)
    } else {
        console.log("id is not defined")
    }
    }, [result])

    const searchData = {
        products: result,
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
