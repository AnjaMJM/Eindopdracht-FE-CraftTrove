import React, {useContext} from 'react';
import Modal from "../Modal/Modal.jsx";
import {CartContext} from "../../context/CartContext/CartContext.jsx";

function CartModal({isOpen, onClose}) {
    const {cartItems} = useContext(CartContext);

    return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>
                    </div>
                        ))}
            </div>
        </Modal>
    );
}

export default CartModal;