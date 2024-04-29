import ProductCard from "../../components/ProductCard/ProductCard.jsx"
import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import "./Overview.css";
import Navbar from "../../components/Navbar/Navbar.jsx";

// After clicking a crafttype in the Navbar, all results will be shown here using ProductCard-components

function Overview() {
    const [products, setProducts] = useState([]);
    const {type} = useParams();
    const navigate = useNavigate();

    const fetchCategories = async (type) => {
        let types;
        switch (type) {
            case "sewing" :
                types = "womens-dresses";
                break;
            case "knitting" :
                types = "furniture";
                break;
            case "crochet" :
                types = "tops";
                break;
            case "embroidery" :
                types = "womens-jewellery";
                break;
            case "lace" :
                types = "fragrances";
                break;
            case "quilt" :
                types = "mens-shirts";
                break;
            case "macrame" :
                types = "home-decoration";
                break;
            case "mending" :
                types = "skincare";
                break;
            case "felt" :
                types = "mens-watches";
                break;
            case "weaving" :
                types = "womens-shoes";
                break;
        }

        try {
            const response = await axios.get(
                `https://dummyjson.com/products/category/${types}`
            );
            setProducts(response.data.products);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        void fetchCategories(type);
    }, [type])

    return (
        <>
            <Navbar />
            <h2 className="overview__title">These are the results for {type}</h2>
            <div className="overview__content">
                {products && products.map(({id, thumbnail, title, brand, price}) => {
                    return <ProductCard
                            key={id}
                            thumbnail={thumbnail}
                            title={title}
                            brand={brand}
                            price={price}
                            handleClick={() => navigate(`/product/${id}`)}/>
                })}
            </div>
        </>
    );
}

export default Overview;