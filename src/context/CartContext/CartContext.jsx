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
            if (exist) {
                setCartItems(cartItems.filter((item) => item.id !== product.id));
            } else {
                setCartItems(
                    cartItems.map((item) =>
                        item.id === product.id ? {...exist, qty: exist.qty - 1} : item
                    )
                );
            }
        }
    }


    const data = {
        cartItems,
        onAdd,
        onRemove,
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
