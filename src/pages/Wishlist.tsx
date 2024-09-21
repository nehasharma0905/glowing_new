import ShopLayout from "../components/ShopLayout";
import WishlistItem from "../Elements/WishlistItem";

const Wishlist = () => {
  return (
    <>
      <div className="wishlist">
        <div>
          <ShopLayout />
        </div>
        <h1 className="header">Wishlist</h1>
        <WishlistItem />
        <div className="wishlistButton">
          <button className="continueShopping">Countinue Shopping</button>
          <button className="updateCart">Update Cart</button>
        </div>
      </div>
    </>
  );
};
export default Wishlist;
