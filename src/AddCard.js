import React, { useState} from "react"

function AddCard({ onAddToy }) {

    const [formData, setFormData] = useState({
        name: "",
        image: "",

    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const toyObj = {
          "name": formData.name,
          "image": formData.image
        }
        fetch("http://localhost:3000/toys", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(toyObj)
        })
          .then(r=> r.json())
          .then(data=> onAddToy(data))
        }

    return (
        <section className='Add'>
            <h1>Add a Toy</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Toy Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Picture of the Toy"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Add Toy</button>
            </form>
        </section>
    )
}

export default AddCard;