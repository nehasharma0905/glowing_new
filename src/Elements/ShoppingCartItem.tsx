import img from "../assets/images/product-01.jpg";
import { IoMdClose } from "react-icons/io";
const ShoppingCartItem = () => {
  return (
    <div className="ShoppingCartItem">
      <div className="WishlistItemContainer">
        <div className="WishlistItemDetails">
          <input className="checkbox" type="checkbox"></input>
          <img className="WishlistItemImg" src={img} />
          <div className="WishlistItemText">
            <p className="WishlistItemTitle">Natural Coconut Cleansing Oil</p>
            <p className="price">$39.00</p>
            <p className="discountPrice">$29.00</p>
          </div>
        </div>
        <div className="WishlistItemButton">
          <div className="buttoncontainer">
            <button className="quantity">-</button>
            <div className="quantity-text">2</div>
            <button className="quantity">+</button>
          </div>

          <p className="discountPrice">$29.00</p>
          <IoMdClose />
        </div>
      </div>
    </div>
  );
};
export default ShoppingCartItem;
