import "./App.css"
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Overview from "./pages/Overview/Overview.jsx";
import Product from "./pages/Product/Product.jsx";
import NewProduct from "./pages/NewProduct/NewProduct.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import NewShop from "./pages/NewShop/NewShop.jsx";
import PersonalTrove from "./pages/PersonalTrove/PersonalTrove.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx"
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

    return (
        <>
            <Header/>
                <main className="main-container">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/categories/:type" element={<Overview/>}/>
                        <Route path="/product/:id" element={<Product />}/>
                        <Route path="/newproduct" element={<NewProduct/>}/>
                        <Route path="/shop/:id" element={<Shop/>}/>
                        <Route path="/newshop" element={<NewShop/>}/>
                        <Route path="/personalTrove" element={<PersonalTrove/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </main>
            <Footer/>
        </>
    )
}

export default App
