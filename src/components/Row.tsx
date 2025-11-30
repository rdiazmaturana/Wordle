import { useCallback, useState } from "react";
import Cell from "./Cell";
import { rowStore } from "../store/row";
import type { Color } from "../types/color";
import { colorsRow, isInWords } from "../utils/utils";
import { gameStore } from "../store/game";
import { cellStore } from "../store/cell";

interface RowProps {
    id: number;
}

const Row = ({ id }: RowProps) => {
    const N = 5;
    const ids: number[] = Array.from({ length: N }, (_, i) => i + 1);
    const [colors, setColors] = useState<Color[]>(Array.from({ length: N }, () => "transparent"));
    const { setSelected } = cellStore();
    const { word, increment, cleanWord } = rowStore();
    const { correct, setMessage } = gameStore();

    const handleEnter = useCallback((event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            const input = word.join("");
            console.log(input)
            if (input.length !== 5) {
                setMessage("No hay suficientes letras");
                setTimeout(() => {
                    setMessage("");
                }, 5000)
                return;
            }
            if (!isInWords(input)) {
                setMessage("La palabra no está en la lista");
                setTimeout(() => {
                    setMessage("");
                }, 5000)
                return;
            }
            setColors(colorsRow(word, correct));
            increment();
            setSelected(1);
            cleanWord();
            console.log(word)
        }
    }, [word, correct, increment, cleanWord])

    return (
        <div className="row-container">
            <form 
                className="row-form"
                onKeyDown={handleEnter}>
                {ids.map((n, i) => {
                    return <Cell key={i} id={n} rowId={id} color={colors[n - 1]}/>
                })}
            </form>
        </div>
    )
}

export default Row;