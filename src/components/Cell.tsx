import { useCallback, useState } from "react";

const Cell = () => {
    const [value, setValue] = useState("");

    const handleChange = (input: string) => {
        if (input.length < 2) {
            setValue(input);
        }
    }

    const handleDelete = useCallback((event: React.KeyboardEvent) => {
        if (event.key === 'Backspace') {
            setValue("");
        }
    }, [])

    return (
        <div className="cell-container">
            <input 
                className="cell-input" 
                value={value} 
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={handleDelete}>
            </input>
        </div>
    )
}

export default Cell;