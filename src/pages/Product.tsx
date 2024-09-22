import { useEffect } from "react";
import AfterShopLayout from "../components/AfterShopLayout";
import ShopGridLayout from "../components/ShopGridLayout";
import ShopLayout from "../components/ShopLayout";
import { useAppDispatch } from "../redux/store";
import { getAllProductsThunk } from "../redux/product/product.thunk";

function Product() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProductsThunk());
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
