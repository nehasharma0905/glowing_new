import { useEffect } from "react";
import AfterShopLayout from "../components/AfterShopLayout";
import ShopGridLayout from "../components/ShopGridLayout";
import ShopLayout from "../components/ShopLayout";
import { getAllProductsApi } from "../api/productsApi";

function Product() {
  useEffect(() => {
    getAllProductsApi();
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
