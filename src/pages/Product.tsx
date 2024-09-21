import { useEffect } from "react";
import AfterShopLayout from "../components/AfterShopLayout";
import ShopGridLayout from "../components/ShopGridLayout";
import ShopLayout from "../components/ShopLayout";
import { searchProductsApi } from "../api/searchProductsApi";

function Product() {
  useEffect(() => {
    searchProductsApi();
  }, []);
  return (
    <div>
      <ShopLayout />
      <AfterShopLayout />
      <ShopGridLayout />
    </div>
  );
}

export default Product;
