import React from "react"

function Cards({ toy }) {
    const { id, name, likes, image} = toy


    return (
        <div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <img src={image} alt='toy photo' width="250" height="250" />
            </div>
        </div>
    )
}

export default Cards;