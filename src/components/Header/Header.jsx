import "./Header.css"
import treasureChest from "../../assets/treasure.png"
import {Link} from "react-router-dom";
import settings from "../../assets/settings.png"
import shoppingBasket from "../../assets/wicker-basket.png"

function Header() {
    return (

        <div className="header">
            <h2>CraftTrove Logo</h2>
            <input type="text" placeholder="searchbar" />
            <p>Welcome person</p>
            <ul className="header__nav-list">
                <li><Link to="/"> <img src={settings} alt="personal settings" className="header__icon"/></Link></li>
                <li><Link to="/personalTrove"> <img src={treasureChest} alt="treasure chest" className="header__icon"/></Link>
                </li>
                <li><Link to="/cart"> <img src={shoppingBasket} alt="shopping basket" className="header__icon"/></Link>
                </li>

            </ul>
        </div>

    );
}

export default Header;