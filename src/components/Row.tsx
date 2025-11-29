import Cell from "./Cell";

const Row = () => {
    return (
        <div className="row-container">
            <form className="row-form">
                <Cell id={0}/>
                <Cell id={1}/>
                <Cell id={2}/>
                <Cell id={3}/>
                <Cell id={4}/>
            </form>
        </div>
    )
}

export default Row;