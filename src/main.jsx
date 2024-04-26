import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import SearchContextProvider from "./context/SearchContext/SearchContext.jsx";
import AuthContextProvider from "./context/AuthContext/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <SearchContextProvider>
                    <App/>
                </SearchContextProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>,
)
