import {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthContext/AuthContext.jsx";

export function useRegister() {
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: "",
        // authorities: ""
    });
    const {login} =useContext(AuthContext)

    const handleRegisterChange = (e) => {
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        const changedFieldName = e.target.name;
        setRegisterData({
            ...registerData,
            [changedFieldName]: e.target.value,
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const {email, password, username} = registerData;
            const response = await axios.post(
                "https://api.datavortex.nl/crafttrove/users",
                {
                    username,
                    email,
                    password,
                    // authorities,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "crafttrove:A9GPZ9fuTVS4x1u6oimE"
                    }
                }
            );
            console.log("Gebruiker is geregistreerd", response)
            if (response.status === 200) {
                login(response.data.jwt, username)}

        } catch (err) {
            console.error("Registration failed", err);
            // Handle login failure, e.g., show error message to the user
        }
    };

    return {registerData, handleRegisterChange, handleRegister};
}