import {createContext, useState} from "react";

export const CartModalContext = createContext(null);

// eslint-disable-next-line react/prop-types
function CartModalContextProvider({children}) {
     const [isCartModalOpen, setIsCartModalOpen] = useState(false);

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
    }
    return (
        <CartModalContext.Provider value={modalData}>
            {children}
        </CartModalContext.Provider>
    );
}

export default CartModalContextProvider;
