import "./Header.css"
import treasureChest from "../../assets/treasure.png"
import settings from "../../assets/settings.png"
import shoppingBasket from "../../assets/wicker-basket.png"
import Searchbar from "../Searchbar/Searchbar.jsx";
import Button from "../Button/Button.jsx";
import AuthFormModal from "../AuthForm/AuthFormModal.jsx";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext/SearchContext.jsx";
import {AuthContext} from "../../context/AuthContext/AuthContext.jsx";
import {useLogin} from "../../hooks/useLogin.js";
import {useRegister} from "../../hooks/useRegister.js";


function Header() {
    const {setResult, fetchData} = useContext(SearchContext)
    const {auth} = useContext(AuthContext)
    const {handleLoginChange, handleLogin, loginData} = useLogin()
    const {handleRegisterChange, handleRegister, registerData} = useRegister()

    const [isAuthFormModalOpen, setIsAuthFormModalOpen] = useState(false);
    const [register, setRegister] = useState(true);
    console.log("auth in header", auth)
    // two different options to open the AuthFormModal, one to register and one to login.
    const handleOpenModalRegister = () => {
        setIsAuthFormModalOpen(true);
        setRegister(true)
    }
    const handleOpenModalLogin = () => {
        setIsAuthFormModalOpen(true);
        setRegister(false)
    }

    const handleCloseAuthFormModal = () => {
        setIsAuthFormModalOpen(false);
    }

    const handleFormSubmit = () => {
        if (register) {
            handleRegister;
        } else {
            handleLogin;
        }

    }

    const handleTabChange = (event) => {
        if (event.target.id === 'tab-register') {
            setRegister(true);
        } else {
            setRegister(false);
        }
    };

    return (
        <>
            <div className="header">
                <Link to="/"><h2>CraftTrove Logo</h2></Link>

                <Searchbar
                    fetchData={fetchData}
                    setResult={setResult}
                    suggestionKey="title"
                />

                <div className="header__nav-list">
                    {auth.isAuth === true ? ( //When is user is logged in (authorized), a greeting and acces to profile and treasuretrove will be given
                            <div className="header__login">
                                <p>Welcome {auth.user.username}</p>
                                <Link to="/"> <img src={settings} alt="personal settings" className="header__icon"/></Link>
                                <Link to="/personalTrove"> <img src={treasureChest} alt="treasure chest"
                                                                className="header__icon"/></Link>
                            </div>)
                        : ( //When a user is not logged in, they will be shown the option to login or register
                            <div className="header__logout">
                                <Button type="button"
                                        btnText="Register"
                                        handleClick={handleOpenModalRegister}/>
                                <Button type="button"
                                        btnText="Login"
                                        handleClick={handleOpenModalLogin}/>
                            </div>
                        )}
                    {/*The shopping cart remains visible*/}
                    <Link to="/cart"> <img src={shoppingBasket} alt="shopping basket" className="header__icon"/></Link>
                </div>
            </div>
            <AuthFormModal
                register={register}
                isOpen={isAuthFormModalOpen}
                handleSubmit={register ? handleRegister : handleLogin}
                onClose={handleCloseAuthFormModal}
                tabChange={handleTabChange}
                handleChange={register ? handleRegisterChange : handleLoginChange}
                usernameValue={register ? registerData.username : loginData.username}
                emailValue={register ? registerData.email : ""}
                passwordValue={register ? registerData.password : loginData.password}
                // isButtonSelected

            />
        </>

    );
}

export default Header;