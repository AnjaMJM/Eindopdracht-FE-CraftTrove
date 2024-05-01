import Modal from "../Modal/Modal.jsx";
import {useState} from "react";


function ErrorModal({errorMessage}) {
    const [error, setError] = useState(false);

    const handleOpenErrorModal = () => {
    if (error === true) {

    }
}

    return (
        <Modal isOpen={isOpen} onClose={onCLose}>
            <p>Something went wrong.</p>
            <p>{errorMessage}</p>
        </Modal>
    );
}

export default ErrorModal;