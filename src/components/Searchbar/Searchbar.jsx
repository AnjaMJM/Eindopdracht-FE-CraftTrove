import {useContext, useState} from 'react';
import "./Searchbar.css";
import {SearchContext} from "../../context/SearchContext/SearchContext";

// eslint-disable-next-line react/prop-types
function Searchbar({suggestionKey}) {
    const [hideSuggestions, setHideSuggestions] = useState(true);
    const {suggestions, setResult, value, setValue, loading, error} = useContext(SearchContext);

    const findResult = (value) => {
        const selectedSuggestion = suggestions.find((suggestion) => suggestion[suggestionKey] === value);
        console.log("Selected Suggestion:", selectedSuggestion);
        setResult(selectedSuggestion);
    };

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

    return (
        <div className='container'>
            <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="search"
                className='searchbar__textbox'
                placeholder="Search data..."
                value={value}
                onChange={handleSearchInputChange}
            />
            {error && <div>Something went wrong.</div>}
            <div className={`searchbar__suggestions ${hideSuggestions ? 'hidden' : ''} `}>
                {loading &&
                    <p className="searchbar__suggestion">Searching for results</p>}
                {!loading && suggestions.length === 0 &&
                    <div className="searchbar__suggestion">No results found</div>}
                {!loading && suggestions &&
                    suggestions.map((suggestion, index) => (
                    <div key={index} className="searchbar__suggestion"
                         onClick={() => findResult(suggestion[suggestionKey])}>
                        {suggestion[suggestionKey]}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Searchbar;
