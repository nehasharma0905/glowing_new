import data from "../Data/products.json";
import ProductCard from "../components/ProductCard";
import ShopLayout from "../components/ShopLayout";
import AfterShopLayout from "../components/AfterShopLayout";
import ShopGridLayout from "../components/ShopGridLayout";

function Product() {
  return (
    <div>
      <ShopLayout />
      <AfterShopLayout />
      <ShopGridLayout />
    </div>
  );
}

export default Product;
