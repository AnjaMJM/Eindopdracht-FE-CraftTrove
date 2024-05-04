import {createContext, useEffect, useState} from "react";

export const CartContext = createContext(null);

function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("cartItems"));
        if (storedItems) {
            setCartItems(storedItems)
        } else {
            setCartItems([])
        }
    }, []);

    function onAdd(product) {
        const exist = cartItems.find((item) => item.id === product.id);
        if (!exist) {
            const updatedCartItems = [...cartItems, product];
            setCartItems(updatedCartItems);
            localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        }
    }

    function onRemove(product) {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist) {
            const updatedCartItems = cartItems.filter((item) => item.id !== product.id)
            setCartItems(updatedCartItems);
            localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        }
    }

    function totalPrice(cartItems) {
        return cartItems.reduce((total, currentItem) => {
            return total + currentItem.price;
        }, 0);
    }

    const data = {
        setCartItems,
        cartItems,
        isCartModalOpen,
        setIsCartModalOpen,
        onAdd,
        onRemove,
        totalPrice
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
