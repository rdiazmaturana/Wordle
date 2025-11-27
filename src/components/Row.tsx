import Cell from "./cell";

const Row = () => {
    return (
        <div className="row-container">
            <form className="row-form">
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </form>
        </div>
    )
}

export default Row;