import { create } from "zustand";

const useKategoriStore = create((set) => ({
  kategori: 'all', 
  setKategori: (newKategori) => set({ kategori: newKategori }),
}));

export default useKategoriStore;
