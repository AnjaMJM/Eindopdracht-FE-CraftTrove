import "./AuthFormModal.css"
import Button from "../Button/Button.jsx";
import Modal from "../Modal/Modal.jsx";


function AuthFormModal({
                           buttonName,
                           handleSubmit,
                           handleChange,
                           usernameValue,
                           emailValue,
                           passwordValue,
                           register,
                           isOpen,
                           onClose
                       }) {


    return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <div className="modal__tabs">
                <button className="modal__tablinks" onClick={register}>Register</button>
                <button className="modal__tablinks" onClick={!register}>Login</button>
            </div>
            <form onSubmit={handleSubmit}>
                {register && <input type="text"
                                    name="username" value={usernameValue} onChange={handleChange} placeholder="Gebruikersnaam"
                />}
                <input type="email" name="email" value={emailValue} onChange={handleChange} placeholder="e-mailadres"/>
                <input type="password" name="password" value={passwordValue} onChange={handleChange}
                       placeholder="wachtwoord"/>
                <Button type="submit"
                        btnText="Submit"/>
            </form>
        </Modal>
    );
}

export default AuthFormModal;