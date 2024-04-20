import "./Header.css"
import treasureChest from "../../assets/treasure.png"
import {Link} from "react-router-dom";
import settings from "../../assets/settings.png"
import shoppingBasket from "../../assets/wicker-basket.png"
import Searchbar from "../Searchbar/Searchbar.jsx";
import {useContext, useState} from "react";
import {SearchContext} from "../../context/SearchContext/SearchContext.jsx";
import Button from "../Button/Button.jsx";
import {AuthContext} from "../../context/AuthContext/AuthContext.jsx";
import AuthFormModal from "../AuthForm/AuthFormModal.jsx";


function Header() {
    const {setResult, fetchData} = useContext(SearchContext)
    const {isAuth} = useContext(AuthContext)

    const [isAuthFormModalOpen, setIsAuthFormModalOpen] = useState(false);
    const [register, setRegister] = useState(true);
    const [authFormData, setAuthFormData] = useState(null)

    // to different options to open the AuthFormModal, one to register and one to login.
    const handleOpenModalRegister = () => {
        setIsAuthFormModalOpen(true);
    }
    const handleOpenModalLogin = () => {
        setIsAuthFormModalOpen(true);
        setRegister(false)
    }

    const handleCloseAuthFormModal = () => {
        setIsAuthFormModalOpen(false);
    }

    const handleFormSubmit = (data) => {
        setAuthFormData(data);
        handleCloseAuthFormModal();
    }
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
                    {isAuth === true ? ( //When is user is logged in (authorized), a greeting and acces to profile and treasuretrove will be given
                            <div className="header__login">
                                <p>Welcome person</p>
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
                onSubmit={handleFormSubmit}
                onClose={handleCloseAuthFormModal}/>
        </>

    );
}

export default Header;