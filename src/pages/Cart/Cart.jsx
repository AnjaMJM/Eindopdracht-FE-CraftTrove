import "./Cart.css"
import happyCrafting from "../../assets/happy-crafting.jpg"

function Cart() {
    return (
        <div className="cart__container">
            <h2>Hooray! You bought some amazing patterns!</h2>
            <h3>Happy crafting!</h3>
            <img src={happyCrafting} alt="a happy crafter" />
        </div>
    );
}

export default Cart;