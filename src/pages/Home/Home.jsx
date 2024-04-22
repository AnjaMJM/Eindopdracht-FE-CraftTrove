import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext/SearchContext.jsx";
import results from "../../components/Results/Results.jsx";
import Results from "../../components/Results/Results.jsx";

function Home() {
    // const { result } = useContext(SearchContext);
    //
    // // Ensure result is an array and not undefined/null
    // const productList = result && result.result ? result.result : [];
    //
    // console.log(productList);
    const {products} = useContext(SearchContext)

    return (
        <div className="home">
            <Navbar/>

            <p>This will become the homepage of CraftTrove</p>
            {products && <Results {...products} />}
            <img src="https://picsum.photos/200" alt="placeholder test" className="img-test"/>

        </div>
    );
}

export default Home;
