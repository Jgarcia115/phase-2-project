import React from "react"
import Cards from "./Cards"

function CardList({ toys }) {
    return (
        <div className='List'>
          <h1>Known Toys</h1>
          <ul>
            {toys.map(toy => {
                return <Cards toy={toy} />
            })}
            </ul>
        </div>
    )
}

export default CardList;