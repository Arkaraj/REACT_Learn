import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext'

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            {movies.map(movie => (
                <div key={movie.id}>
                    <li>{movie.name}</li>
                    <p>{movie.price}</p>
                </div>
            ))}

        </div>
    );
}

export default MovieList;
