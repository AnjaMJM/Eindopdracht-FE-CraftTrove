import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {checkTokenValidity} from "../../helpers/checkTokenValidity.js";

export const AuthContext = createContext(null);


function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    });

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken && checkTokenValidity(storedToken)) {
            void login(storedToken);
        } else {
            void logout()
        }
    }, []);

    async function login(jwtToken) {
        const decodedToken = jwtDecode(jwtToken)
        localStorage.setItem("jwtToken", jwtToken);

        try {
            const response = await axios.get(`http://localhost:3000/600/users/${decodedToken.sub}`, {
                headers: {
                    "Content-Type": "application/json",
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
                status: "done"
            });
            console.log("De gebruiker is ingelogd 🔓");
        } catch (err) {
            console.error(err)
        }
    }

    const logout = () => {
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: "done",
        });
        localStorage.removeItem("token");
        console.log("De gebruiker is uitgelogd 🔒");
    };

    const data = {
        auth,
        login,
    }

    console.log("auth context", auth)

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;