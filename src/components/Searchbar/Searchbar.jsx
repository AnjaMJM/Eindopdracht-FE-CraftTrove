import { useState } from 'react';
import './searchbar.css';
import {useDebounce} from "../../hooks/useDebounce.js";

// eslint-disable-next-line react/prop-types
const Searchbar = ({ fetchData, setResult, suggestionKey }) => {
    const [value, setValue] = useState(''); //this is the value of the search bar
    const [suggestions, setSuggestions] = useState([]); // this is where the search suggestions get stored
    const [hideSuggestions, setHideSuggestions] = useState(true);
    console.log(hideSuggestions)
    const findResult = (value) => {
        setResult(
            suggestions.find((suggestion) => suggestion[suggestionKey] === value)
        );
    };

    useDebounce(
        async () => {
            try {
                const suggestions = await fetchData(value);

                setSuggestions(suggestions || []);
            } catch (error) {
                console.log(error);
            }
        },
        1000,
        [value]
    );

    const handleFocus = () => {
        setHideSuggestions(false)
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
        <>
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
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className="suggestion" onClick={() => findResult(suggestion[suggestionKey])}>
                            {suggestion[suggestionKey]}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Searchbar;