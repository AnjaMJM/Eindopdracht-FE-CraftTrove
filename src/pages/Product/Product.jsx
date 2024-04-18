import {SearchContext} from "../../context/SearchContext/SearchContext.jsx";
import {useContext} from "react";
import "./Product.css"

import {getRandomDifficulty, getRandomMaterial, getRandomTools, getRandomKeywords} from "../../helpers/randomProductDescriptionHelper.js";

function Product() {
    // After a product is selected in the searchbar, an ID will be extracted and stored in productId
    const {products} = useContext(SearchContext);
    // const productId = products.id;
    //     console.log("id", productId)

    const {title, brand, description, price, thumbnail, images, rating} = products
    return (
        <div className="product__wrapper">
            <div className="product__left-column">
                <section className="product__photo-slider">
                    <p>photo-slider</p>
                    <img src={thumbnail} alt={title} />
                </section>
                <section title="product__about-designer">
                    <h4>About {brand}</h4>
                    <p></p>
                </section>
            </div>
            <div className="product__right-column">
                <section>
                    <h3>{title}</h3>
                    <h4>By {brand}</h4>
                    <div>
                        <p>€{price}</p><button>add to cart</button>
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
    );
}

export default Product;