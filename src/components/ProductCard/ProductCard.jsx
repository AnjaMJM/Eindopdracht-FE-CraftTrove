import {useContext} from "react";
import {SearchContext} from "../../context/SearchContext/SearchContext.jsx";


function ProductCard(props) {
    const { products } = useContext(SearchContext);

    // Ensure products is an array and not undefined/null
    const productList = products && products.products ? products.products : [];

    console.log(productList);
    return (
        <div>
            {productList.length > 0 && productList.map((product, index) => (
                <div key={index}>
                    <p>{product.title}</p>
                </div>))}
        </div>
    );
}

export default ProductCard;