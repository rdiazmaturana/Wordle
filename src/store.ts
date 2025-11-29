import { create } from "zustand";

type CellState = {
    selected: number;
    increment: () => void;
    decrement: () => void;
    setSelected: (id: number) => void;
}

export const store = create<CellState>((set) => ({
    selected: 0,
    increment: () => set((state) => { if (state.selected !== 4) {
        return { selected: state.selected + 1 }
    } else {
        return { selected: state.selected }
    }}),
    decrement: () => set((state) => { if (state.selected !== 0) {
        return { selected: state.selected - 1 }
    } else {
        return { selected: state.selected }
    }}),
    setSelected: (id: number) => set({ selected: id })
}))