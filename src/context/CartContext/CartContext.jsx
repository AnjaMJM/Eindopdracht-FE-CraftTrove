import {createContext, useState} from "react";

export const CartContext = createContext(null);

function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    function onAdd(product) {
        const exist = cartItems.find((item) => item.id === product.id);
        if (!exist) {
            setCartItems([...cartItems, product])

            console.log("product in cartContext", product)
        }
    }

    console.log("cartItems", cartItems)

    function onRemove(product) {
        console.log("onRemove", product)
        const exist = cartItems.find((item) => {
            return item.id === product.id;
        })
        console.log("onRemove, exist", exist)
        if (exist) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
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
