import {createContext, useState} from "react";

export const AuthContext = createContext(null);


function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(false);


    const data = {
        isAuth
    }

    console.log("auth context", isAuth)

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;