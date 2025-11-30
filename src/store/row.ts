import { create } from "zustand";

type RowState = {
    selected: number;
    word: string[];
    increment: () => void;
    cleanWord: () => void;
}

export const rowStore = create<RowState>((set) => ({
    selected: 1,
    word: Array.from({ length: 5 }, () => ""),
    increment: () => set((state) => ({selected: state.selected + 1})),
    cleanWord: () => set({word: Array.from({ length: 5 }, () => "")}),
}))