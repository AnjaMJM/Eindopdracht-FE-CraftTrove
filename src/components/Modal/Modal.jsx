import {useRef, useEffect} from 'react';

import './Modal.css';
import Button from "../Button/Button.jsx";

const Modal = ({isOpen, onClose, btnPosition, colorscheme, children}) => {
    const modalRef = useRef(null);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handleCloseModal();
        }
    };

    useEffect(() => {
        const modalElement = modalRef.current;

        if (modalElement) {
            if (isOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isOpen]);

    return (
        <dialog ref={modalRef}
                onKeyDown={handleKeyDown}
                className={colorscheme === "blue" ? "modal modal__border-blue" : "modal modal__border-yellow"}
        >
            <div className={btnPosition === "low" ? "modal__close-btn modal__btn-position-low" : "modal__close-btn"}>
                <Button type="button"
                        handleClick={handleCloseModal}
                        btnText="Close"
                        colorscheme={colorscheme}
                />
            </div>
            {children}
        </dialog>
    );
};
export default Modal;