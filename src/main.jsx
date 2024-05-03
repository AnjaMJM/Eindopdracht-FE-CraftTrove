import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import SearchContextProvider from "./context/SearchContext.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import AuthModalContextProvider from "./context/AuthModalContext.jsx";
import CartModalContextProvider from "./context/CartModalContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <AuthModalContextProvider>
                <AuthContextProvider>
                    <CartModalContextProvider>
                        <CartContextProvider>
                            <SearchContextProvider>
                                <App/>
                            </SearchContextProvider>
                        </CartContextProvider>
                    </CartModalContextProvider>
                </AuthContextProvider>
            </AuthModalContextProvider>
        </Router>
    </React.StrictMode>,
)
