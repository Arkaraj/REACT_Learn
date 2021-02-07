import React, { useState, createContext } from 'react';

export const MovieContext = createContext()

export const MovieProvider = (props) => {

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
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}


