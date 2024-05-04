import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import "./Header.css"
import {SearchContext} from "../../context/SearchContext.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import {CartContext} from "../../context/CartContext.jsx";
import {AuthModalContext} from "../../context/AuthModalContext.jsx";
import {CartModalContext} from "../../context/CartModalContext.jsx";
import {useLogin} from "../../hooks/useLogin.js";
import {useRegister} from "../../hooks/useRegister.js";
import treasureChest from "../../assets/treasure.png"
import settings from "../../assets/settings.png"
import Searchbar from "../Searchbar/Searchbar.jsx";
import Button from "../Button/Button.jsx";
import AuthFormModal from "../AuthForm/AuthFormModal.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import CartModal from "../CartModal/CartModal.jsx";
import Logo from "../Logo/Logo.jsx";


function Header() {
    const {setResult, fetchData} = useContext(SearchContext)
    const {auth, logout} = useContext(AuthContext)
    const {setCartItems} = useContext(CartContext)
    const {
        isAuthFormModalOpen,
        registerForm,
        handleTabChange,
        handleCloseAuthFormModal,
        handleOpenAuthFormModalRegister,
        handleOpenAuthFormModalLogin,
    } = useContext(AuthModalContext)
    const {isCartModalOpen,
        handleOpenCartModal,
        handleCloseCartModal,} = useContext(CartModalContext)
    const {handleLoginChange, handleLogin, loginData} = useLogin()
    const {handleRegisterChange, handleRegister, registerData} = useRegister()
    const navigate = useNavigate()
    const [authLoading, toggleAuthLoading] = useState(false)
    const [error, setError] = useState(null)

    function handlePurchase() {
        navigate("/cart");
        handleCloseCartModal();
        setCartItems([]);
    }

    const handleAuthFormSubmit = async (e) => {
        e.preventDefault();
        setError(null)

        const formHandler = registerForm ? handleRegister : handleLogin;
        try {
            let errorCheck = await formHandler(e)
            if(errorCheck  === "Login failed"){
                setError("Incorrect username or password")
            } if (errorCheck === "Registration failed"){
                setError("Username or email address already exists")
            } else {
                handleCloseAuthFormModal();
            }
        } catch (error) {
            console.error("Error occurred during form submission:", error);
        } finally {
            toggleAuthLoading(false);
        }
    }

    return (
        <>
            <header className="header">
                <Link to="/" className="header__title"><Logo/></Link>
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
                                        <Link to="/newshop" className="header__drop-down-menu--item">Profile</Link>
                                        <div onClick={logout} className="header__drop-down-menu--item">Logout</div>
                                    </div>
                                </div>
                                <Link to="/personalTrove"> <img src={treasureChest} alt=" treasure chest"
                                                                className=" header__icon"/></Link>
                            </div>
                        ) : (
                            <div className=" header__logged-out">
                                <Button type=" button"
                                        btnText=" Register"
                                        handleClick={handleOpenAuthFormModalRegister}/>
                                <Button type=" button"
                                        btnText=" Login"
                                        handleClick={handleOpenAuthFormModalLogin}/>
                            </div>
                        )}
                    <CartWidget className="header__icon"
                                handleClick={handleOpenCartModal}/>
                </div>
            </header>
            <AuthFormModal
                register={registerForm}
                isOpen={isAuthFormModalOpen}
                handleSubmit={handleAuthFormSubmit}
                onClose={handleCloseAuthFormModal}
                tabChange={handleTabChange}
                handleChange={registerForm ? handleRegisterChange : handleLoginChange}
                usernameValue={registerForm ? registerData.username : loginData.username}
                emailValue={registerForm ? registerData.email : ""}
                passwordValue={registerForm ? registerData.password : loginData.password}
                loading={authLoading}
                error={error}
            />
            <CartModal
                isOpen={isCartModalOpen}
                onClose={handleCloseCartModal}
                handlePurchase={handlePurchase}/>
        </>

    );
}

export default Header;