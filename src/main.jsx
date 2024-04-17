import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import SearchContextProvider from "./context/SearchContext/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <SearchContextProvider>
                <App/>
            </SearchContextProvider>
        </Router>
    </React.StrictMode>,
)
