import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from "react-router-dom";
import SearchContextProvider from "./context/SearchContext/SearchContext.jsx";
import AuthContextProvider from "./context/AuthContext/AuthContext.jsx";
// import ModalContextProvider from "./context/ModalContext/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                {/*<ModalContextProvider>*/}
                    <SearchContextProvider>
                        <App/>
                    </SearchContextProvider>
                {/*</ModalContextProvider>*/}
            </AuthContextProvider>
        </Router>
    </React.StrictMode>,
)
