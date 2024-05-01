import "./NotFound.css"
import Button from "../../components/Button/Button.jsx";
import {Link, useNavigate} from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    const handleClickHome = () => navigate("/")
    const handleClickBack = () => navigate(-1)
    return (
        <>
            <div className="not-found__text">Whoops! Either you lost track, or the page you're looking for does not exist</div>
            <div className="not-found__navigation">
                <Link to="/"><Button
                btnText={"Return to the homepage"}
            /></Link>
            </div>
        </>
    );
}

export default NotFound;