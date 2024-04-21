import "./AuthFormModal.css"
import Button from "../Button/Button.jsx";
import Modal from "../Modal/Modal.jsx";


function AuthFormModal({
                           handleSubmit,
                           handleChange,
                           usernameValue,
                           emailValue,
                           passwordValue,
                           register,
                           isOpen,
                           onClose,
    tabChange
                       }) {


    return (
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <div className="modal__tab-wrap">
                <div className="modal__tab">
                    <input type="radio" id="tab-register" name="modal-tabs" onChange={tabChange} checked={register} />
                    <label htmlFor="tab-register">Register</label>
                </div>
                <div className="modal__tab">
                    <input type="radio" id="tab-login" name="modal-tabs" onChange={tabChange} checked={!register} />
                    <label htmlFor="tab-login">Login</label>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="auth-form">
                {register && (
                    <input type="text"
                           name="username" value={usernameValue} onChange={handleChange}
                           placeholder="Gebruikersnaam"
                    />
                )}
                <input type="email" name="email" value={emailValue} onChange={handleChange} placeholder="e-mailadres"/>
                <input type="password" name="password" value={passwordValue} onChange={handleChange}
                       placeholder="wachtwoord"/>
                <Button type="submit"
                        btnText="Submit"
                        colorscheme="blue"
                />
            </form>
        </Modal>
    );
}

export default AuthFormModal;