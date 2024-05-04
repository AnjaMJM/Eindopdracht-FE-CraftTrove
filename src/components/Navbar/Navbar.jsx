import {Link} from "react-router-dom";

import "./Navbar.css"
import sewing from "../../assets/navbar/sewing-machine.png"
import knitting from "../../assets/navbar/knitting.png"
import crochet from "../../assets/navbar/crochet.png"
import embroidery from "../../assets/navbar/embroidery.png"
import lace from "../../assets/navbar/lace-making.png"
import quilt from "../../assets/navbar/bed.png"
import macrame from "../../assets/navbar/macrame.png"
import mending from "../../assets/navbar/mending.png"
import felt from "../../assets/navbar/wool.png"
import weaving from "../../assets/navbar/weaving.png"

function Navbar() {
    return (
        <div className="nav-bar__container">
            <Link to="/categories/sewing"><img src={sewing} alt="sewing" title="sewing" className="nav-bar__link-img"/></Link>
            <Link to="/categories/knitting"><img src={knitting} alt="knitting" title="knitting" className="nav-bar__link-img"/></Link>
            <Link to="/categories/crochet"><img src={crochet} alt="crochet" title="crochet" className="nav-bar__link-img"/></Link>
            <Link to="/categories/embroidery"><img src={embroidery} alt="embroidery" title="embroidery" className="nav-bar__link-img"/></Link>
            <Link to="/categories/lace"><img src={lace} alt="lace" title="lace" className="nav-bar__link-img"/></Link>
            <Link to="/categories/quilt"><img src={quilt} alt="quilt" title="quilt" className="nav-bar__link-img"/></Link>
            <Link to="/categories/macrame"><img src={macrame} alt="macramé" title="macramé" className="nav-bar__link-img"/></Link>
            <Link to="/categories/mending"><img src={mending} alt="mending" title="mending" className="nav-bar__link-img"/></Link>
            <Link to="/categories/felt"><img src={felt} alt="felt" title="felt" className="nav-bar__link-img"/></Link>
            <Link to="/categories/weaving"><img src={weaving} alt="weaving" title="weaving" className="nav-bar__link-img"/></Link>
        </div>
    );
}

export default Navbar;