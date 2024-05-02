import {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthContext/AuthContext.jsx";
import {useLogin} from "./useLogin.js";

export function useRegister() {
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: "",
        authorities:[
            {
            authority:""
        }]
    });
    const {handleLogin} =useLogin()

    const handleRegisterChange = (e) => {
        const newValue = e.target.type === "radio" ? e.target.value : e.target.value;

        console.log(e)
        let changedFieldName = e.target.name;
        if(changedFieldName === "user-type"){
            setRegisterData(
                {
                    ...registerData,
                    authorities:[{
                        authority:newValue
                    }]
                }
            )
        }else {
            setRegisterData({
                ...registerData,
                [changedFieldName]: e.target.value,
            });
        }
        console.log(registerData)
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const {email, password, username, authorities} = registerData;
            const response = await axios.post(
                "https://api.datavortex.nl/crafttrove/users",
                {
                    username,
                    email,
                    password,
                    authorities,
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "crafttrove:A9GPZ9fuTVS4x1u6oimE"
                    }
                }
            );
            console.log("Gebruiker is geregistreerd", response)
            if (response.status === 200) {
                void handleLogin(e, username, password)
            }
        } catch (err) {
            console.error("Registration failed", err);
            return "Registration failed"
        }
    };

    return {registerData, handleRegisterChange, handleRegister};
}