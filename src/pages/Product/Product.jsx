import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import "./Product.css"
import {AuthContext} from "../../context/AuthContext.jsx";
import {CartContext} from "../../context/CartContext.jsx";
import {WishlistContext} from "../../context/WishlistContext.jsx";
import {
    getRandomDifficulty,
    getRandomMaterial,
    getRandomTools,
    getRandomKeywords
} from "../../helpers/randomProductDescriptionHelper.js";
import {getRandomDesignerDescription} from "../../helpers/randomCreatorDescriptionHelper.js";
import Button from "../../components/Button/Button.jsx";
import GallerySlider from "../../components/GallerySlider/GallerySlider.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import LoadingMessage from "../../components/LoadingMessage/LoadingMessage.jsx";

function Product() {
    const {id} = useParams();
    const {auth} = useContext(AuthContext)
    const {onAdd} = useContext(CartContext)
    const {addToWishlist} = useContext(WishlistContext)
    const [product, setProduct] = useState([]);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchProduct = async () => {
        setLoading(true)
        setError(false)
        try {
            const response = await axios.get(
                `https://dummyjson.com/products/${id}`
            );
            setProduct(response.data)
            setImages(response.data.images)
        } catch (err) {
            setError(true)
        }
        setLoading(false)
    };

    useEffect(() => {
        void fetchProduct();
    }, [id]);

    const {title, brand, description, price} = product;

    return (
        <>
            {loading && <LoadingMessage/>}
            {!loading && error && <ErrorMessage message="There was an error fetching the product."/>}
            {!loading && product &&
                <div key={id} className="product__wrapper">
                    <div className="product__left-column">
                        <section className="product__photo-slider">
                            {images.length === 0 && <div>No images to show</div>}
                            {images && <GallerySlider
                                images={images}/>}
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
                                    handleClick={() => addToWishlist(product)}
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