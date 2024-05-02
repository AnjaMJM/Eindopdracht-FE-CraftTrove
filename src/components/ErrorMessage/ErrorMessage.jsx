import "./ErrorMessage.css"
import {Link} from "react-router-dom";
import Button from "../Button/Button.jsx";

function ErrorMessage({message}) {
    return (
        <div className="error-message">
            <p>{message}</p>
            <Link to="/"><Button
                btnText={"Return to the homepage"}
            /></Link>
        </div>
    );
}

export default ErrorMessage;