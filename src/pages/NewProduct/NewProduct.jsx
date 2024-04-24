import "./NewProduct.css"
import {useState} from "react";
import Button from "../../components/Button/Button.jsx";

function NewProduct() {
    let [productFormState, setProductFormState] = useState({
        productName: "",
        shopName: "",
        aboutShop: "",
        logoShop: "",
        productPrice: "€ "
        // products: [],
    })

    function handleChange(e) {
        setProductFormState({
            ...productFormState,
            [e.target.name]: e.target.value,
        })
        console.log(e)
    }

    //
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log("product form", productFormState)
    // }

    return (
        <>
            <h2 className="new-product__title"> Add a new product </h2>
            <form className="new-product__form">
                <div className="new-product__form-group">
                    <div className="new-product__product-name">
                        <label htmlFor="productName" className="new-product__label">Product name:</label>
                        <input
                            id="productName"
                            type="text"
                            name="productName"
                            value={productFormState.productName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="new-product__product-price">
                        <label htmlFor="productPrice" className="new-product__label">Price:</label>
                        <input
                            id="productPrice"
                            type="text"
                            name="productPrice"
                            value={productFormState.productPrice}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="new-product__form-description">
                    <label htmlFor="aboutShop" className="new-product__label">Product description:</label>
                    <textarea id="aboutShop"
                              name="aboutShop"
                              rows="5"
                              cols="40"
                              className="new-product__textarea"
                    ></textarea>
                </div>

                <div className="new-product__difficulty">
                    <p className="new-product__label">Difficulty</p>
                    <div className="new-product__difficulty-radio">
                        <input type="radio" id="beginner" name="difficulty-type"/>
                        <label htmlFor="beginner">Beginner</label>
                        <input type="radio" id="mediocre" name="difficulty-type"/>
                        <label htmlFor="mediocre">Mediocre</label>
                        <input type="radio" id="advanced" name="difficulty-type"/>
                        <label htmlFor="advanced">Advanced</label>
                        <input type="radio" id="expert" name="difficulty-type"/>
                        <label htmlFor="expert">Expert</label>
                    </div>
                </div>

                <div className="new-product__craft-type">
                    <p className="new-product__label">Type of craft:</p>
                    <div className="new-product__craft-type-checkbox">
                        <label htmlFor="sewing">
                            <input type="checkbox" id="sewing" value="sewing" name="craft-type"/>
                            Sewing</label>
                        <label htmlFor="knitting">
                            <input type="checkbox" id="knitting" value="knitting" name="craft-type"/>
                            Kitting</label>
                        <label htmlFor="crochet">
                            <input type="checkbox" id="crochet" value="crochet" name="craft-type"/>
                            Crochet</label>
                        <label htmlFor="lace">
                            <input type="checkbox" id="lace" value="lace" name="craft-type"/>
                            Lace</label>
                        <label htmlFor="felt">
                            <input type="checkbox" id="felt" value="felt" name="craft-type"/>
                            Felt</label>
                        <label htmlFor="embroidery">
                            <input type="checkbox" id="embroidery" value="embroidery" name="craft-type"/>
                            Embroidery</label>
                        <label htmlFor="macrame">
                            <input type="checkbox" id="macrame" value="macrame" name="craft-type"/>
                            Macramé</label>
                        <label htmlFor="weaving">
                            <input type="checkbox" id="weaving" value="weaving" name="craft-type"/>
                            Weaving</label>
                        <label htmlFor="mending">
                            <input type="checkbox" id="mending" value="mending" name="craft-type"/>
                            Mending</label>
                        <label htmlFor="quilt">
                            <input type="checkbox" id="quilt" value="quilt" name="craft-type"/>
                            Quilt/patchwork</label>
                    </div>
                </div>

                <div className="new-product__form-image-upload">
                    <label htmlFor="logoShop">Add Photo
                    <input id="logoShop"
                               type="file"
                               name="logoShop"
                               accept="image/png, image/jpg"
                               className="new-product__form-image-upload-button"
                               value={productFormState.logoShop}
                               onChange={handleChange}
                        /></label></div>

                <Button
                    type="submit"
                    btnText="Save changes"
                    colorscheme="blue"/>
            </form>
        </>
    );
}

export default NewProduct;