import ShopLayout from "../components/ShopLayout";
import ShoppingCartItem from "../Elements/ShoppingCartItem";
import { IoMdClose } from "react-icons/io";

const ShoppingCart = () => {
  return (
    <div className="ShoppingCart">
      <div>
        <ShopLayout />
      </div>
      <h1 className="header">Shopping Cart</h1>
      <div className="cartHeader">
        <p className="products">PRODUCTS</p>
        <p className="quantity">QUANTITY</p>
        <p className="price">PRICE</p>
      </div>
      <ShoppingCartItem />
      <div className="wishlistButton">
        <div className="buttoncontainer">
          <button className="continueShopping">Countinue Shopping</button>
          <button className="clearCart">
            <IoMdClose />
            <span> Clear Shopping Cart</span>
          </button>
        </div>
        <button className="updateCart">Update Cart</button>
      </div>
    </div>
  );
};
export default ShoppingCart;
