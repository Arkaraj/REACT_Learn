import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext)

    return (
        <nav>
            No of movies: {movies.length}
        </nav>
    )
}

export default Nav;