import { useContext, useState, useEffect } from 'react';
import "./Searchbar.css";
import { useDebounce } from "../../hooks/useDebounce";
import { SearchContext } from "../../context/SearchContext/SearchContext";

const Searchbar = ({ setResult, suggestionKey }) => {
    const [value, setValue] = useState(''); // Value of the search bar
    const [hideSuggestions, setHideSuggestions] = useState(true);
    const [localSuggestions, setLocalSuggestions] = useState([]);
    const { suggestions, fetchData, handleSelectedResult } = useContext(SearchContext);

    useEffect(() => {
        console.log(suggestions)
        setLocalSuggestions(suggestions.products);
    }, [suggestions]);

    const findResult = (value) => {
        setResult(
            localSuggestions.find((suggestion) => suggestion[suggestionKey] === value)
        );
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

    const handleSearchSuggestionClick = (selectedResult) => {
        handleSelectResult(selectedResult);
    };

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
                {localSuggestions && localSuggestions.map((suggestion, index) => (
                    <div key={index} className="suggestion" onClick={() => findResult(suggestion[suggestionKey])}>
                        {suggestion[suggestionKey]}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Searchbar;
