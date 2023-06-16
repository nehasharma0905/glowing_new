import { useState, useEffect } from "react";
import data from "../Data/products.json";
import ProductCard from "./ProductCard";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
const ShopGridLayout = () => {
  const [productArray, setProductArray] = useState([]);

  // declare -> const [variableName, functionName] = useState(initialState)

  // state consists of two things: 1st variable <- This variable is
  // observable i.e make UI render(refresh) again and again whenever changes

  // 2nd function <- U can't update this variable directly, therefore we need a fuction to do so
  // variable = 10 X can't be done
  // right way of updating state variable is setVariable(10) -> now variable will have 10 as it's value

  // When we define state we have to give an initial value

  useEffect(() => {
    setProductArray(data.products);
  }, []);

  return (
    <div className="ShopGridLayout">
      <div className="Options">
        <div className="search_section">
          <input placeholder="Search"></input>
          <button>
            <AiOutlineSearch />
          </button>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Hair Care</li>
            <li>Lotion</li>
            <li>Body Care</li>
            <li>Makeup</li>
            <li>Skin Care</li>
            <li>Oil</li>
          </ul>
        </div>
        <div className="categories">
          <h3>Price</h3>
        </div>
        <div className="categories">
          <h3>Ratings</h3>
          <ul>
            <li>All</li>
            <li>4+</li>
            <li>3+</li>
          </ul>
        </div>
      </div>
      <div className="products">
        {productArray.map((el, ind) => (
          <ProductCard key={ind} {...el} />
        ))}
      </div>
    </div>
  );
};
export default ShopGridLayout;
