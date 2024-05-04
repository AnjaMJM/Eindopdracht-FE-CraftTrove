import "./ProductCard.css"
import Button from "../Button/Button.jsx";

// eslint-disable-next-line react/prop-types
function ProductCard({thumbnail, title, brand, handleClick, price, removeProduct, handleRemove}) {

    return (
        <article className="product-card__container">
            <div className="product-card__img-container">
                <img className="product-card__img" src={thumbnail} alt={title}/>
            </div>
            <h3 className="product-card__title">{title}</h3>
            <p>by {brand}</p>
            <p className="product-card__price">€{price}</p>
            <Button btnText="View product" handleClick={handleClick}/>
            {removeProduct && <Button btnText="Remove" handleClick={handleRemove}/> }
        </article>
    );
}

export default ProductCard;