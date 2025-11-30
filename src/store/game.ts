import { create } from "zustand";
import { chooseWord } from "../utils/utils";

type GameState = {
    correct: string[];
    message: string;
    setMessage: (newMessage: string) => void
}

export const gameStore = create<GameState>((set) => ({
    correct: chooseWord(),
    message: "",
    setMessage: (newMessage: string) => set({message: newMessage}),
}))