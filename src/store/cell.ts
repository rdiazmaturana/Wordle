import { create } from "zustand";

type CellState = {
    selected: number;
    increment: () => void;
    decrement: () => void;
    setSelected: (id: number) => void;
}

export const cellStore = create<CellState>((set) => ({
    selected: 1,
    increment: () => set((state) => { if (state.selected !== 5) {
        return { selected: state.selected + 1 }
    } else {
        return { selected: state.selected }
    }}),
    decrement: () => set((state) => { if (state.selected !== 1) {
        return { selected: state.selected - 1 }
    } else {
        return { selected: state.selected }
    }}),
    setSelected: (id: number) => set({ selected: id })
}))