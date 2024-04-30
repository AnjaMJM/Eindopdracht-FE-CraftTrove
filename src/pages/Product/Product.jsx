// import {SearchContext} from "../../context/SearchContext/SearchContext.jsx";
import {useContext, useEffect, useState} from "react";
import "./Product.css"
import {
    getRandomDifficulty,
    getRandomMaterial,
    getRandomTools,
    getRandomKeywords
} from "../../helpers/randomProductDescriptionHelper.js";
import axios from "axios";
import {useParams} from "react-router-dom";
import Button from "../../components/Button/Button.jsx";
import {AuthContext} from "../../context/AuthContext/AuthContext.jsx";
import {CartContext} from "../../context/CartContext/CartContext.jsx";
import {getRandomDesignerDescription} from "../../helpers/randomCreatorDescriptionHelper.js";

function Product() {
    const {id} = useParams();
    const {auth} = useContext(AuthContext)
    const {onAdd} = useContext(CartContext)
    const [product, setProduct] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchProduct = async () => {
        console.log("fetchtProduct called")
        try {
            const response = await axios.get(
                `https://dummyjson.com/products/${id}`
            );
            setProduct(response.data)
            console.log("fetchProduct", response);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        void fetchProduct();
        getRandomTools();
        getRandomKeywords();
        getRandomDifficulty();
        getRandomMaterial()
    }, [id]);

    const {title, brand, description, price, thumbnail, images} = product;

    return (
        <>
        {product &&
                    <div key={id} className="product__wrapper">
                        <div className="product__left-column">
                            <section className="product__photo-slider">
                                <p>photo-slider</p>
                                <img src={thumbnail} alt={title}/>
                            </section>
                            <section title="product__about-designer">
                                <h4>About {brand}</h4>
                                <p>{getRandomDesignerDescription({brand})}</p>
                            </section>
                        </div>
                        <div className="product__right-column">
                            <section className="product__general-information">
                                <h3>{title}</h3>
                                <h4>By {brand}</h4>
                                <div className="product__general-information--price-and-buttons">
                                    <p>€{price}</p>
                                    {auth.isAuth && <Button
                                        type="button"
                                        btnText="Add to wishlist"
                                        // If not authorized, this button should prompt registration, or it's only visible when logged in
                                    />}
                                    <Button
                                        type="button"
                                        btnText="Add to basket"
                                        handleClick={() => onAdd(product)}
                                    />

                                </div>
                                <p>{description}</p>
                            </section>
                            <section className="product__pattern-specification">
                                <h4>Pattern specifications</h4>
                                <p>Difficulty: {getRandomDifficulty()}</p>
                                <p>Materials: {getRandomMaterial()}</p>
                                <p>Tools: {getRandomTools()}</p>
                                <p>Keywords: {getRandomKeywords()}</p>
                            </section>
                        </div>


                    </div>
               }
        </>
    );
}

export default Product;