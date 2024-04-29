import "./CartModal.css"
import {useContext} from 'react';
import Modal from "../Modal/Modal.jsx";
import {CartContext} from "../../context/CartContext/CartContext.jsx";
import trashcan from "../../assets/trashcan.png"

function CartModal({isOpen, onClose}) {
    const {cartItems, onRemove} = useContext(CartContext);

    console.log("CartItems in cartModal", cartItems);

    return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <h2 className="cart-modal__title">In your basket</h2>
            <div className="cart-modal__items">
                {cartItems.length === 0 && <div>Your basket is empty</div>}
                {cartItems.map((product) => (
                    <article className="cart-modal__item-container" key={product.id}>
                        <div className="cart-modal__img-container">
                            <img className="cart-modal__img" src={product.thumbnail} alt={product.title}/>
                        </div>
                        <div className="cart-modal__text-container">
                            <h4 className="cart-modal__product-title">{product.title}</h4>
                        </div>
                        <p className="cart-modal__price">€{product.price}</p>
                        <img src={trashcan} alt="remove item from basket" onClick={() => onRemove(product)} className="cart-modal__remove-item"/>
                    </article>
                ))}
            </div>
            {cartItems.length !== 0 && (
                <div>added price</div>
            )}
        </Modal>
    );
}

export default CartModal;