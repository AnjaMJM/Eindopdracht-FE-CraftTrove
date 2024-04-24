import "./NewShop.css"
import {useState} from "react";
import addProduct from "../../assets/add-post.png"
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button.jsx";

function NewShop() {
    let [shopFormState, setShopFormState] = useState({
        username: "",
        shopName: "",
        aboutShop: "",
        logoShop: "",
        // products: [],
    })

    function handleChange(e) {
        setShopFormState({
            ...shopFormState,
            [changedFieldName]: e.target.value,
        })
        console.log()
    }

    //
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log("shop form", shopFormState)
    // }

    return (
        <>
            <h2 className="new-shop__title"> Let's set up shop! </h2>
            <form className="new-shop__form">
                <div className="new-shop__form-group">
                    <div className="new-shop__form-group-names">
                        <label htmlFor="username">Your name:</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            value={shopFormState.username}
                            onChange={handleChange}
                        />
                        <label htmlFor="shopName">Shop name:</label>
                        <input
                            id="shopName"
                            type="text"
                            name="ShopName"
                            value={shopFormState.shopName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="new-shop__form-image-upload">
                        <label htmlFor="logoShop">Shop logo:</label>
                        <div className="new-shop__form-image-upload-box">
                            <input id="logoShop"
                                   type="file"
                                   name="logoShop"
                                   accept="image/png, image/jpg"
                                   className="new-shop__form-image-upload-button"
                                   value={shopFormState.logoShop}
                                   onChange={handleChange}
                            /></div>
                    </div>
                </div>
                <div className="new-shop__form-about">
                    <label htmlFor="aboutShop">Tell us something about your shop:</label>
                    <textarea id="aboutShop"
                              name="aboutShop"
                              rows="5"
                              cols="40"
                              className="new-shop__textarea"
                    ></textarea>
                </div>
                <div className="new-shop__add-product">
                    <p>Products in your shop:</p>
                    <Link to="/newproduct"><img src={addProduct}
                                                alt="Add product to shop"
                                                className="new-shop__add-product-image"/>
                    </Link>
                </div>

                    <Button
                        type="submit"
                        btnText="Save changes"
                        colorscheme="blue" />
            </form>
        </>
    );
}

export default NewShop;