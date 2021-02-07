import React, { useState } from 'react';

const MovieList = () => {

    const [movies, setMovies] = useState([
        {
            id: 2783,
            name: 'Movie 1',
            price: 50
        },
        {
            id: 2795,
            name: 'Movie 2',
            price: 70
        },
        {
            id: 2821,
            name: 'Movie 3',
            price: 80
        }
    ])

    return (
        <div>
            {movies.map(movie => (
                <li>{movie.name}</li>
            ))}
        </div>
    );
}

export default MovieList;
