import { create } from "zustand";

const useIndexText = create((set) => ({
  indexText: null,
  setIndexText: (targetIndex) =>
    set((prev) => {
      return { indexText: targetIndex };
    }),
}));

export default useIndexText;
