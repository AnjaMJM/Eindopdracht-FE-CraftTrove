import { useState } from "react";
import axios from "axios";

export function useLogin() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleLoginChange = (e) => {
        const changedFieldName = e.target.name;
        setLoginData({
            ...loginData,
            [changedFieldName]: e.target.value,
        });
    };

    const handleLogin = async (e, login) => {
        e.preventDefault();
        try {
            const { email, password } = loginData;
            const response = await axios.post(
                "https://api.datavortex.nl/crafttrove/users/authenticate",
                {
                    email,
                    password,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "crafttrove:A9GPZ9fuTVS4x1u6oimE"
                    }
                }
            );
            if (response.status === 200) {
                login(response.data.accessToken);
            }
        } catch (err) {
            console.error("Login failed", err);
            // Handle login failure, e.g., show error message to the user
        }
    };

    return { loginData, handleLoginChange, handleLogin };
}