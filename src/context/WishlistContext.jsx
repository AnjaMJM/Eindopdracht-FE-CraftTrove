import {createContext, useEffect, useState} from "react";

export const WishlistContext = createContext(null);

function WishlistContextProvider({children}) {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("Wishlist items"));
        if (storedItems) {
            setWishlistItems(storedItems)
        } else {
            setWishlistItems([])
        }
    }, []);

    function addToWishlist(product) {
        const exist = wishlistItems.find((item) => item.id === product.id);
        if (!exist) {
            const updatedCartItems = [...wishlistItems, product];
            setWishlistItems(updatedCartItems);
            localStorage.setItem("Wishlist items", JSON.stringify(updatedCartItems));
        }
    }

    function onRemove(id) {
        const exist = wishlistItems.find((item) => item.id === id);
        if (exist) {
            const updatedWishlistItems = wishlistItems.filter((item) => item.id !== id)
            setWishlistItems(updatedWishlistItems);
            localStorage.setItem("Wishlist items", JSON.stringify(updatedWishlistItems));
        }
    }

    const data = {
        setWishlistItems,
        wishlistItems,
        addToWishlist,
        onRemove,
    }

    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    );
}

export default WishlistContextProvider;
