import {useRef, useEffect, useState} from 'react';
import './Modal.css';
import Button from "../Button/Button.jsx";
import AuthFormModal from "../AuthForm/AuthFormModal.jsx";

const Modal = ({isOpen, onClose, children}) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef(null);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    // to trigger event on key (in this case 'esc'-key)
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handleCloseModal();
        }
    };

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;

        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    return (
        <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">

                <div className="modal__close-btn">
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