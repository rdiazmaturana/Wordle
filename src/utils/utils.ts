import type { Color } from "../types/color";

export const colorsRow = (input: string[], correct: string[]): Color[] => {
    const N = correct.length;
    const result: Color[] = Array(N).fill("#757575");

    const counts: Record<string, number> = {};

    for (let i = 0; i < N; i++) {
        const c = correct[i];
        counts[c] = (counts[c] || 0) + 1;
    }

    for (let i = 0; i < N; i++) {
        if (input[i] === correct[i]) {
            result[i] = "#43a047";
            counts[input[i]]!--;
        }
    }

    for (let i = 0; i < N; i++) {
        if (result[i] !== "#43a047") {
            const c = input[i];
            if (counts[c] > 0) {
                result[i] = "#e4a81d";
                counts[c]!--;
            }
        }
    }

    return result;
}




const palabras = [
    "perro","casas","nubes","flaco","trama","salto","canto","lapiz",
    "ritmo","plato","brazo","sello","tarde","campo","lindo","rubio",
    "grito","prado","fuego","rueda"
];

export const chooseWord = () => {
    const random = Math.floor(Math.random() * palabras.length);
    return palabras[random].split("");
}

export const isInWords = (word: string) => {
    return palabras.includes(word);
}
