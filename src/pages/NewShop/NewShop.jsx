import "./NewShop.css"
import {useState} from "react";

function NewShop() {
    let [formState, setFormState] = useState({
        username: "",
        shopName: "",
        aboutShop: "",
        logoShop: "",
        // products: [],
    })

    function handleChange(e) {
        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        })
        console.log()
    }

    //
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log("shop form", formState)
    // }

    return (
        <>
            <div><p>Here a designer can set up shop, tell something about themselves and create a new productpage.
                Authorization required</p></div>
            <form className="new-shop__form">
                <div className="new-shop__form-group">
                    <div className="new-shop__form-group-names">
                        <label htmlFor="username">Your name:</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            value={formState.username}
                            onChange={handleChange}
                        />
                        <label htmlFor="shopName">Shop name:</label>
                        <input
                            id="shopName"
                            type="text"
                            name="ShopName"
                            value={formState.shopName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="new-shop__form-image-upload">
                        <label htmlFor="logoShop">Shop logo:</label>
                        <input id="logoShop"
                               type="file"
                               name="logoShop"
                               accept="image/png, image/jpg"
                               className="new-shop__form-image-upload-button"
                               value={formState.logoShop}
                               onChange={handleChange}
                        />
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
            </form>
        </>
    );
}

export default NewShop;