import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {getRandomProducts} from "../../helpers/getRandomProductInspiration.js";
import {Link} from "react-router-dom";

function Home() {
    const [inspirations, setInspirations] = useState([]);


    const fetchInspiration = async () => {
        try {
            const response = await axios.get(
                "https://dummyjson.com/products?limit=100&select=id,thumbnail"
            );
            setInspirations(response.data.products)
            console.log("fetch inspiration", response.data.products);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        void fetchInspiration();
    }, [])

    const randomProducts = getRandomProducts(inspirations);
    console.log("random products", randomProducts);

    return (
        <>
        <div className="home">
            <Navbar/>
            <h2 className="home__inspiration-title">Get started right now!</h2>
            <div className="home__inspiration-row">
            {randomProducts.map(({id, thumbnail}) => {
                return <Link to={`/product/${id}`} key={id} className="home__inspiration-img-container">
                    <img src={thumbnail}  className="home__inspiration-img" alt="let's get started!"/>
                </Link>
            })}
            </div>
        </div>
        </>
    );
}

export default Home;
