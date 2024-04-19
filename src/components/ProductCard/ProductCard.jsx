import "./ProductCard.css"

// This page is for the small descriptions of a pattern, used in Overview.


// eslint-disable-next-line react/prop-types
function ProductCard({thumbnail, title, brand, description, price}) {

    return (
        <>
            <article className="product-card__container">
                <div>
                    <img className="product-card__img" src={thumbnail} alt={title}/>
                </div>
                <div className="product-card__text">
                    <h3 className="product-card__title">{title}</h3>
                    <p>by {brand}</p>
                    <p className="product-card__price">€{price}</p>
                    <p>{description}</p>
                </div>
            </article>
        </>
    );
}

export default ProductCard;