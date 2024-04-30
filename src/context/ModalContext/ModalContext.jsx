import {createContext, useState} from "react";

export const ModalContext = createContext(null);

// eslint-disable-next-line react/prop-types
function ModalContextProvider({children}) {
    const [isAuthFormModalOpen, setIsAuthFormModalOpen] = useState(false);
    const [registerForm, toggleRegisterForm] = useState(true);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

// two different options to open the AuthFormModal, one to registerForm and one to login.
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

    const handleTabChange = (event) => {
        if (event.target.id === 'tab-register') {
            toggleRegisterForm(true);
        } else {
            toggleRegisterForm(false);
        }
    };

    const handleOpenCartModal = () => {
        setIsCartModalOpen(true)
    }

    const handleCloseCartModal = () => {
        setIsCartModalOpen(false)
    }

    const modalData = {
        isCartModalOpen,
        handleOpenCartModal,
        handleCloseCartModal,
        isAuthFormModalOpen,
        registerForm,
        handleTabChange,
        handleCloseAuthFormModal,
        handleOpenAuthFormModalRegister,
        handleOpenAuthFormModalLogin

    }
    return (
        <ModalContext.Provider value={modalData}>
            {children}
        </ModalContext.Provider>
    );
}
    export default ModalContextProvider;
