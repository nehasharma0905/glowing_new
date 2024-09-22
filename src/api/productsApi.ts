import { getInstance } from "./mainInstance";

export const getAllProductsApi = async () => {
  const instance = await getInstance();
  return instance.get("/products/get-all-products");
};

export const getItemApi = async () => {
  const instance = await getInstance();
  return instance.get(
    "/products/get-product-by-id/5142fa9c-f65b-4c66-b525-3bafab9e560d"
  );
};
