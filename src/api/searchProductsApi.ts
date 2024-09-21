import { getInstance } from "./mainInstance";

export const searchProductsApi = async () => {
  const instance = await getInstance();
  return instance.get("/products/search/1");
};
