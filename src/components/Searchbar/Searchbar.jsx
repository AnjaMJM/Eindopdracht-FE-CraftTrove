import {useContext, useState} from 'react';
import "./Searchbar.css";
import {useDebounce} from "../../hooks/useDebounce";
import {SearchContext} from "../../context/SearchContext/SearchContext";
// import {createLogger} from "vite";
// import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Searchbar = ({suggestionKey}) => {
    // const [value, setValue] = useState(''); // Value of the search bar
    const [hideSuggestions, setHideSuggestions] = useState(true);
    const {suggestions, fetchData, setResult, value, setValue} = useContext(SearchContext);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     console.log("value", value);
    // }, [value]);

    const findResult = (value) => {
        const selectedSuggestion = suggestions.find((suggestion) => suggestion[suggestionKey] === value);
        console.log("Selected Suggestion:", selectedSuggestion);
        setResult(selectedSuggestion);
    };


    useDebounce(
        async () => {
            try {
                await fetchData(value);
            } catch (error) {
                console.log(error);
            }
        },
        1000,
        [value]
    );

    const handleFocus = () => {
        setHideSuggestions(false);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setHideSuggestions(true);
        }, 200);
    };

    const handleSearchInputChange = (e) => {
        setValue(e.target.value);
    };

    // const handleSearchSuggestionClick = (selectedResult) => {
    //     handleSelectedResult(selectedResult);
    // };

    return (
        <div className='container'>
            <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="search"
                className='textbox'
                placeholder="Search data..."
                value={value}
                onChange={handleSearchInputChange}
            />
            <div className={`suggestions ${hideSuggestions ? 'hidden' : ''} `}>
                {suggestions && suggestions.map((suggestion, index) => (
                    <div key={index} className="suggestion" onClick={() => findResult(suggestion[suggestionKey])}>
                        {suggestion[suggestionKey]}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Searchbar;
