import {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthContext/AuthContext.jsx";

export function useLogin() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });
const {login} = useContext(AuthContext)

    const handleLoginChange = (e) => {
        const changedFieldName = e.target.name;
        setLoginData({
            ...loginData,
            [changedFieldName]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { username, password } = loginData;
            const response = await axios.post(
                "https://api.datavortex.nl/crafttrove/users/authenticate",
                {
                    username,
                    password,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "crafttrove:A9GPZ9fuTVS4x1u6oimE"
                    }
                }
            );
            if (response.status === 200) {
                login(response.data.jwt);
                console.log("login succesvol", response)
            }
        } catch (err) {
            console.error("Login failed", err);
            // Handle login failure, e.g., show error message to the user
        }
    };

    return { loginData, handleLoginChange, handleLogin };
}