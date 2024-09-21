import img from "../assets/images/product-01.jpg";
import { IoMdClose } from "react-icons/io";
const WishlistItem = () => {
  return (
    <div className="WishlistItem">
      <div className="WishlistItemContainer">
        <div className="WishlistItemDetails">
          <IoMdClose />
          <img className="WishlistItemImg" src={img} />
          <div className="WishlistItemText">
            <p className="WishlistItemTitle">Natural Coconut Cleansing Oil</p>
            <p className="price">$39.00</p>
            <p className="discountPrice">$29.00</p>
          </div>
        </div>

        <div className="WishlistItemButton">
          <p className="inStock">In stock</p>
          <button className="addToCart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default WishlistItem;
