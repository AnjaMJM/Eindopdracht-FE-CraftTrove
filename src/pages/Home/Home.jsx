import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import "./Home.css";
import {getRandomProducts} from "../../helpers/getRandomProductInspiration.js";
import Navbar from "../../components/Navbar/Navbar.jsx";
import LoadingMessage from "../../components/LoadingMessage/LoadingMessage.jsx";

function Home() {
    const [inspirations, setInspirations] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchInspiration = async () => {
        setError(false)
        setLoading(true)
        try {
            const response = await axios.get(
                "https://dummyjson.com/products?limit=100&select=id,thumbnail"
            );
            setInspirations(response.data.products)
        } catch (err) {
            setError(true)
        }
        setLoading(false)
    };

    useEffect(() => {
        void fetchInspiration();
    }, [])

    const randomProducts = getRandomProducts(inspirations);

    return (
        <>
            <div className="home">
                <Navbar/>
                <h2 className="home__inspiration-title">Get started right now!</h2>
                <div className="home__inspiration-row">
                    {loading &&
                        <LoadingMessage/>}
                    {!loading && error &&
                        <div>Unable to fetch inspiration</div>}
                    {inspirations &&
                        randomProducts.map(({id, thumbnail}) => {
                        return <Link to={`/product/${id}`} key={id} className="home__inspiration-img-container">
                            <img src={thumbnail} className="home__inspiration-img" alt="let's get started!"/>
                        </Link>
                    })}
                </div>
            </div>
        </>
    );
}

export default Home;
