import { create } from "zustand";
import type { StateCreator } from "zustand";

export interface Counter {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const counterStore: StateCreator<Counter> = (set) => ({
  count: 0,
  increment: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  decrement: () => {
    set((state) => ({
      count: Math.max(0, state.count - 1),
    }));
  },
  reset: () => {
    set({
      count: 0,
    });
  },
});

const useCounterStore = create<Counter>(counterStore);

export default useCounterStore;
