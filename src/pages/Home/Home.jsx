import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext/SearchContext.jsx";

function Home() {
    const { products } = useContext(SearchContext);

    // Ensure products is an array and not undefined/null
    const productList = products && products.products ? products.products : [];

    console.log(productList);

    return (
        <div className="home">
            <Navbar />
            {productList.length > 0 && productList.map((product, index) => (
                <div key={index}>
                    <p>{product.title}</p>
                </div>
            ))}
            <p>This will become the homepage of CraftTrove</p>
        </div>
    );
}

export default Home;
