import React from "react"
import Cards from "./Cards"

function CardList({ toys }) {
    return (
        <div className='List'>
            <div className="container">
            {toys.map(toy => {
                return <Cards toy={toy} />
            })}

            </div>
        </div>
    )
}

export default CardList;