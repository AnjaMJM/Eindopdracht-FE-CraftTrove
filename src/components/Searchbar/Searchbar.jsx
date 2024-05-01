import {useContext, useState} from 'react';
import "./Searchbar.css";
import {useDebounce} from "../../hooks/useDebounce";
import {SearchContext} from "../../context/SearchContext/SearchContext";

// eslint-disable-next-line react/prop-types
function Searchbar({suggestionKey}) {
    const [hideSuggestions, setHideSuggestions] = useState(true);

    const {suggestions, fetchData, setResult, value, setValue} = useContext(SearchContext);



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
            <div className={`searchbar__suggestions ${hideSuggestions ? 'hidden' : ''} `}>
                {suggestions && suggestions.map((suggestion, index) => (
                    <div key={index} className="searchbar__suggestion" onClick={() => findResult(suggestion[suggestionKey])}>
                        {suggestion[suggestionKey]}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Searchbar;
