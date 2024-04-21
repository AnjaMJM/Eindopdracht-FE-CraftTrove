import "./Button.css"

function Button({type, btnText, handleClick, colorscheme}) {

    return (
        <button className={colorscheme === "blue" ? "btn btn__blue" : "btn btn__yellow"} type={type} onClick={handleClick}>{btnText}</button>
    );
}

export default Button;