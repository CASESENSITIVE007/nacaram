import { fetchAllProducts } from "./api";
import type { Product } from "./api";

export const useFetchProducts = () => {
  try{
    fetchAllProducts().then((products: Product[]) => {
      return products;
    });
  }
};