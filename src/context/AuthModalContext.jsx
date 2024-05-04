import {createContext, useState} from "react";

export const AuthModalContext = createContext(null);

// eslint-disable-next-line react/prop-types
function AuthModalContextProvider({children}) {
    const [isAuthFormModalOpen, setIsAuthFormModalOpen] = useState(false);
    const [registerForm, toggleRegisterForm] = useState(true);

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

    const modalData = {
        isAuthFormModalOpen,
        registerForm,
        handleTabChange,
        handleCloseAuthFormModal,
        handleOpenAuthFormModalRegister,
        handleOpenAuthFormModalLogin

    }
    return (
        <AuthModalContext.Provider value={modalData}>
            {children}
        </AuthModalContext.Provider>
    );
}

export default AuthModalContextProvider;
