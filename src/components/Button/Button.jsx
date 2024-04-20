import "./Button.css"

function Button({type, btnText, handleClick}) {
    return (
        <button className="btn btn__yellow" type={type} onClick={handleClick}>{btnText}</button>
    );
}

export default Button;