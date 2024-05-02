import {createContext, useEffect, useState} from "react";

export const CartContext = createContext(null);

function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState([]);

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
            console.log("product in cartContext", product);
        }
    }

    console.log("cartItems", cartItems)

    function onRemove(product) {
        console.log("onRemove", product)
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

    console.log("total price", totalPrice(cartItems));

    const data = {
        setCartItems,
        cartItems,
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
