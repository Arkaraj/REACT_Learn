import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext'

const AddMovie = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [movies, setMovies] = useContext(MovieContext)

    function updateName(e) {
        setName(e.target.value)
    }
    function updatePrice(e) {
        setPrice(e.target.value)
    }

    function addMovie(e) {
        e.preventDefault()
        let movie = { id: movies.length + 1, name, price }
        setMovies(prev => [...prev, movie])
    }

    return (
        <div>
            <form onSubmit={addMovie}>
                <input type="text" name="name" value={name} onChange={updateName} />
                <input type="number" name="price" value={price} onChange={updatePrice} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddMovie;

