import {createContext, useState} from "react";

export const CartContext = createContext(null);

function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState([]);

    //
    function onAdd(product){
        setCartItems([...cartItems, product])
    }

    const data = {
        cartItems
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
