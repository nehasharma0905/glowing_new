import "./App.css";
import "./style/styles.scss";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Item from "./pages/Item";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Navigation";


function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="item" element={<Item />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
