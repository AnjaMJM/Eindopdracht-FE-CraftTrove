import "./Button.css"

function Button({type, btnText, handleClick, colorscheme, isDisabled}) {

    return (
        <button className={colorscheme === "blue" ? "btn btn__blue" : "btn btn__yellow"}
                type={type}
                disabled={isDisabled}
                onClick={handleClick}>
                    {btnText}
        </button>
    );
}

export default Button;