import "./Header.css"
import treasureChest from "../../assets/treasure.png"
import settings from "../../assets/settings.png"
import shoppingBasket from "../../assets/wicker-basket.png"
import Searchbar from "../Searchbar/Searchbar.jsx";
import Button from "../Button/Button.jsx";
import AuthFormModal from "../AuthForm/AuthFormModal.jsx";
import {useContext, useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {SearchContext} from "../../context/SearchContext/SearchContext.jsx";
import {AuthContext} from "../../context/AuthContext/AuthContext.jsx";
import {CartContext} from "../../context/CartContext/CartContext.jsx";
import {useLogin} from "../../hooks/useLogin.js";
import {useRegister} from "../../hooks/useRegister.js";
import CartWidget from "../CartWidget/CartWidget.jsx";
import CartModal from "../CartModal/CartModal.jsx";
import Logo from "../Logo/Logo.jsx";



function Header() {
    const {setResult, fetchData} = useContext(SearchContext)
    const {auth, logout} = useContext(AuthContext)
    const {setCartItems} = useContext(CartContext)
    const {handleLoginChange, handleLogin, loginData} = useLogin()
    const {handleRegisterChange, handleRegister, registerData} = useRegister()
    const navigate = useNavigate()

    const [isAuthFormModalOpen, setIsAuthFormModalOpen] = useState(false);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [registerForm, toggleRegisterForm] = useState(true);
    console.log("auth in header", auth)

    // two different options to open the AuthFormModal, one to register and one to login.
    const handleOpenAuthFormModalRegister = () => {
        setIsAuthFormModalOpen(true);
        toggleRegisterForm(true)
    }
    const handleOpenAuthFormModalLogin = () => {
        setIsAuthFormModalOpen(true);
        toggleRegisterForm(false)
    }

    const handleCloseAuthFormModal = () => {
        setIsAuthFormModalOpen(false);
    }

    const handleOpenCartModal = () => {
        setIsCartModalOpen(true)
    }

    const handleCloseCartModal = () => {
        setIsCartModalOpen(false)
    }

    const handleFormSubmit = () => {
        if (registerForm === true) {
            handleRegister;
    handleCloseAuthFormModal()
        } else {
            handleLogin;
    handleCloseAuthFormModal()
        }

    }

    function handlePurchase() {
        navigate("/cart");
        handleCloseCartModal();
        setCartItems([]);
    }

    const handleTabChange = (event) => {
        if (event.target.id === "tab-register") {
            toggleRegisterForm(true);
        } else {
            toggleRegisterForm(false);
        }
    };

    return (
        <>
            <div className="header">
                <Link to="/" className="header__title"><Logo /></Link>

                <Searchbar
                    fetchData={fetchData}
                    setResult={setResult}
                    suggestionKey="title"
                />

                <div className="header__nav-list">
                    {auth.isAuth === true ? (
                            <div className="header__logged-in">
                                <p>Welcome {auth.user.username}</p>
                                <div className="header__drop-down">
                                <img src={settings} alt="personal settings" className="header__icon"/>
                                <div className="header__drop-down-menu">
                                    <Link to="/newshop">Edit profile</Link>
                                    <div onClick={logout}>Logout</div>
                                </div></div>
                                <Link to="/personalTrove"> <img src={treasureChest} alt="treasure chest"
                                                                className="header__icon"/></Link>
                            </div>)
                        : ( //When a user is not logged in, they will be shown the option to login or registerForm
                            <div className="header__logged-out">
                                <Button type="button"
                                        btnText="Register"
                                        handleClick={handleOpenAuthFormModalRegister}/>
                                <Button type="button"
                                        btnText="Login"
                                        handleClick={handleOpenAuthFormModalLogin}/>
                            </div>
                        )}
                    <CartWidget className="header__icon header__cart-widget"
                        handleClick={handleOpenCartModal}/>
                </div>
            </div>
            <AuthFormModal
                register={registerForm}
                isOpen={isAuthFormModalOpen}
                handleSubmit={handleFormSubmit}
                onClose={handleCloseAuthFormModal}
                tabChange={handleTabChange}
                handleChange={registerForm ? handleRegisterChange : handleLoginChange}
                usernameValue={registerForm ? registerData.username : loginData.username}
                emailValue={registerForm ? registerData.email : ""}
                passwordValue={registerForm ? registerData.password : loginData.password}
                // isButtonSelected

            />
            <CartModal
                isOpen={isCartModalOpen}
                onClose={handleCloseCartModal}
                handlePurchase={handlePurchase}/>
        </>

    );
}

export default Header;