import { useCallback, useEffect, useRef, useState } from "react";
import { cellStore } from "../store/cell";
import { rowStore } from "../store/row";
import type { Color } from "../types/color";

interface CellProps {
    id: number;
    rowId: number;
    color: Color;
}

const Cell = ({ id, rowId, color }: CellProps) => {
    const [value, setValue] = useState("");
    const [disabled, setDisabled] = useState(true);

    const inputRef = useRef<HTMLInputElement>(null);
    const { selected, increment, decrement, setSelected } = cellStore();
    const { selected: rowSelected, word } = rowStore();

    useEffect(() => {
        if (rowSelected === rowId) {
            setDisabled(false);
            if (selected === id) {
                inputRef.current?.focus();
                inputRef.current?.setSelectionRange(inputRef.current?.value.length, inputRef.current?.value.length);
            }
        } else {
            setDisabled(true)
        }
    }, [selected, rowSelected, disabled])

    const handleChange = (input: string) => {
        if (input.length > 0) {
            const char = input.charAt(input.length - 1);
            if (/^[a-zA-ZñÑ]$/.test(char)) {
                setValue(char.toLowerCase());
                word[id - 1] = char.toLowerCase();
                increment();
            }
        }
    }

    const handleDelete = useCallback((event: React.KeyboardEvent) => {
        if (event.key === 'Backspace') {
            setValue("");
            word[id - 1] = "";
            decrement();
            console.log(word)
        }
    }, [])

    const handleClick = (cellId: number) => {
        setSelected(cellId);
        inputRef.current?.setSelectionRange(inputRef.current?.value.length, inputRef.current?.value.length);
    }

    const handleBlur = () => {
        if (selected === id && rowSelected === rowId) {
            inputRef.current?.focus();
        }
    }

    return (
        <div className="cell-container">
            <input 
                ref={inputRef}
                type="text"
                className="cell-input" 
                value={value} 
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={handleDelete}
                autoFocus={selected === id && rowSelected === rowId}
                onClick={() => handleClick(id)}
                style={{backgroundColor: color}}
                disabled={disabled}
                onBlur={() => handleBlur()}>
            </input>
        </div>
    )
}

export default Cell;