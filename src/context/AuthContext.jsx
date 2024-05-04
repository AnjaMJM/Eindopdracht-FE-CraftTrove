import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {checkTokenValidity} from "../helpers/checkTokenValidity.js";

export const AuthContext = createContext(null);

function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    });
    const [authError, toggleAuthError] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem("jwtToken");
        const username = localStorage.getItem("username");
        if (storedToken && checkTokenValidity(storedToken)) {
            void login(storedToken, username);
        } else {
            void logout()
        }
    }, []);

    async function login(jwtToken, username) {
        localStorage.setItem("jwtToken", jwtToken);
        toggleAuthError(false)
        try {
            const response = await axios.get(`https://api.datavortex.nl/crafttrove/users/${username}`, {
                headers: {
                    accept: "*/*",
                    Authorization: `Bearer ${jwtToken}`,
                }
            });
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: "done",
            });
            localStorage.setItem("username", response.data.username);
        } catch (err) {
            toggleAuthError(true)
        }
    }



    const logout = () => {
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: "done",
        });
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("username");
        localStorage.removeItem("cartItems");
    };

    const data = {
        auth,
        login,
        logout,
        authError
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;