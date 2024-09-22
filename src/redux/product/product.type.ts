export type TProductState = {
  allProducts: {
    data: Array<TSearchProductItem>;
    error: any;
    isLoading: boolean;
  };
  product: {
    data: TSearchProductItem | null;
    error: any;
    isLoading: boolean;
  };
};
export type TSearchProductItem = {
  name: string;
  id: string;
  image: string;
  price: number;
  rating: number;
};
