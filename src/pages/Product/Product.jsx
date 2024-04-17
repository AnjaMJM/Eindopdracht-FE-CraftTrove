import Results from "../../components/Results/Results.jsx";
import {SearchContext} from "../../context/SearchContext/SearchContext.jsx";
import {useContext} from "react";


function Product() {
    const { products } = useContext(SearchContext);

    return (
        <>
        <div>View the details of a product</div>
    {products && <Results {...products} />}


            </>
    );
}

export default Product;