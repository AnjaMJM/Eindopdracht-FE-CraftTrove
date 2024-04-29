import {useRef, useEffect, useState} from 'react';
import './Modal.css';
import Button from "../Button/Button.jsx";
import AuthFormModal from "../AuthForm/AuthFormModal.jsx";

const Modal = ({isOpen, onClose, btnPosition, children}) => {
    // const [isModalOpen, setModalOpen] = useState(false);
    const modalRef = useRef(null);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
    };

    // to trigger event on key (in this case 'esc'-key)
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
        <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">

                <div className={btnPosition === "low" ? "modal__close-btn modal__btn-position-low" : "modal__close-btn"}>
                    <Button type="button"
                            handleClick={handleCloseModal}
                            btnText="Close"
                            colorscheme={AuthFormModal? "blue" : "default"}
                    />
                </div>
            {children}
        </dialog>
    );
};
export default Modal;