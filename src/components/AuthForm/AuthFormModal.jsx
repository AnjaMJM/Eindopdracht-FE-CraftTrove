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
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose} btnPosition="low" colorscheme="blue">
            <div className="modal__tab-wrap">
                <div className="modal__tab">
                    <input type="radio" id="tab-registerForm" name="modal-tabs" onChange={tabChange} checked={register}/>
                    <label htmlFor="tab-register">Register</label>
                </div>
                <div className="modal__tab">
                    <input type="radio" id="tab-login" name="modal-tabs" onChange={tabChange} checked={!register}/>
                    <label htmlFor="tab-login">Login</label>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
                    <div className="auth-form__input">
                        <input type="text"
                               name="username" id="username"
                               value={usernameValue}
                               onChange={handleChange}
                               placeholder="Username"
                               required/>
                        <div className="auth-form__underline"></div>
                    </div>

                {register && (<div className="auth-form__input">
                    <input type="email"
                           name="email"
                           id="email"
                           value={emailValue}
                           onChange={handleChange}
                           placeholder="Email address"
                           required/>
                    <div className="auth-form__underline"></div>
                </div>)}

                <div className="auth-form__input">
                    <input type="password"
                           name="password"
                           id="password"
                           value={passwordValue}
                           onChange={handleChange}
                           placeholder="Password"
                            minLength="8"
                           required/>
                    <div className="auth-form__underline"></div>
                </div>

                {register && (
                    <div className="auth-form__radio">
                        <input type="radio" id="user-creative" onChange={handleChange} name="user-type" value="USER"
                        />
                        <label htmlFor="user-creative">Creative</label>
                        <input type="radio" id="user-designer" onChange={handleChange} name="user-type" value="ADMIN"
                        />
                        <label htmlFor="user-designer">Designer</label>
                    </div>
                )}
                <Button type="submit"
                        btnText="Submit"
                        colorscheme="blue"
                />
            </form>
        </Modal>
    )
        ;
}

export default AuthFormModal;