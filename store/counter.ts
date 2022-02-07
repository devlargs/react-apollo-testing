import create from "zustand";

const useCounter = create<{
  counter: number;
  setCounter: () => void;
}>((set) => ({
  counter: 0,
  setCounter: () => set((state) => ({ counter: state.counter + 1 })),
}));

export default useCounter;
