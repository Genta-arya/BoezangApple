import {create} from "zustand";

const useSingleProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));

export default useSingleProductStore;
