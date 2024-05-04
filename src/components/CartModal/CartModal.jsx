import {useContext} from 'react';

import "./CartModal.css"
import {CartContext} from "../../context/CartContext.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import {AuthModalContext} from "../../context/AuthModalContext.jsx";
import trashcan from "../../assets/trashcan.png"
import Modal from "../Modal/Modal.jsx";
import Button from "../Button/Button.jsx";

function CartModal({isOpen, onClose, handlePurchase}) {
    const {cartItems, onRemove, totalPrice} = useContext(CartContext);
    const {handleOpenAuthFormModalRegister} = useContext(AuthModalContext)
    const {auth} = useContext(AuthContext)

    return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <h2 className="cart-modal__title">In your basket</h2>
            <div className="cart-modal__items">
                {cartItems.length === 0 &&
                    <p>Your basket is empty</p>}
                {cartItems.map((product) => (
                    <article className="cart-modal__item-container" key={product.id}>
                        <div className="cart-modal__img-container">
                            <img className="cart-modal__img"
                                 src={product.thumbnail} alt={product.title}/>
                        </div>
                        <div className="cart-modal__text-container">
                            <h4 className="cart-modal__product-title">{product.title}</h4>
                        </div>
                        <p className="cart-modal__price">€{product.price}</p>
                        <img src={trashcan} alt="remove item from basket" onClick={() => onRemove(product)}
                             className="cart-modal__remove-item"/>
                    </article>
                ))}
            </div>
            {cartItems.length !== 0 && (
                <div className="cart-modal__purchase-container">
                    <div className="cart-modal__total-price">Total: €{totalPrice(cartItems)},-</div>
                    <Button btnText="Purchase patterns"
                            handleClick={auth.isAuth ? handlePurchase : handleOpenAuthFormModalRegister}
                    />
                </div>
            )}
        </Modal>
    );
}

export default CartModal;