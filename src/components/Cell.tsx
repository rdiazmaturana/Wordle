import { useCallback, useEffect, useRef, useState } from "react";
import { store } from "../store";

interface CellProps {
    id: number
}

const Cell = ({ id }: CellProps) => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const { selected, increment, decrement, setSelected } = store();

    useEffect(() => {
        if (selected === id) {
            inputRef.current?.focus();
            inputRef.current?.setSelectionRange(inputRef.current?.value.length, inputRef.current?.value.length)
        }
    }, [selected])

    const handleChange = (input: string) => {
        if (input.length > 0) {
            increment();
            setValue(input.charAt(input.length - 1));
        }
    }

    const handleDelete = useCallback((event: React.KeyboardEvent) => {
        if (event.key === 'Backspace') {
            setValue("");
            decrement();
        }
    }, [])

    return (
        <div className="cell-container">
            <input 
                ref={inputRef}
                type="text"
                className="cell-input" 
                value={value} 
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={handleDelete}
                autoFocus={selected === id}
                onClick={() => setSelected(id)}>
            </input>
        </div>
    )
}

export default Cell;