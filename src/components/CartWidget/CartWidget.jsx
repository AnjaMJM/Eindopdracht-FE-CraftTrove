import shoppingBasket from "../../assets/wicker-basket.png";
import "./CartWidget.css"
import {useContext} from "react";
import {CartContext} from "../../context/CartContext.jsx";



function CartWidget({className, handleClick}) {
    const {cartItems} = useContext(CartContext)

    return (
        <button className="cart-widget__container" onClick={handleClick}>
            {cartItems.length > 0 && <span className="cart-widget__counter"> {cartItems.length}</span>}
            <img src={shoppingBasket} alt="shopping basket" className={className}/>
        </button>
    );
}

export default CartWidget;