import {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {WishlistContext} from "../../context/WishlistContext.jsx";
import LoadingMessage from "../../components/LoadingMessage/LoadingMessage.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

function PersonalTrove(props) {
    const {wishlistItems, onRemove} = useContext(WishlistContext)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <h2 className="overview__title">Welcome to you personal CraftTrove</h2>
            {loading && <LoadingMessage/>}
            {!loading && error || !loading && wishlistItems.length === 0 &&
                <ErrorMessage message="Your personal trove is empty."/>}

            <div className="overview__content">
                {wishlistItems && wishlistItems.map(({id, thumbnail, title, brand, price}) => {
                    return <ProductCard
                        key={id}
                        thumbnail={thumbnail}
                        title={title}
                        brand={brand}
                        price={price}
                        handleClick={() => navigate(`/product/${id}`)}
                        removeProduct={true}
                        handleRemove={() => onRemove(id)}/>
                })}
            </div>
        </>
    );
}

export default PersonalTrove;