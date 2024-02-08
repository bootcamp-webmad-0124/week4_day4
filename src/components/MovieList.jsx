import { useState } from "react"
import moviesDataJSON from "../movies-data.json"
import MovieCard from "./MovieCard"
import NewMovieForm from "./NewMovieForm"

function MovieList() {

    const [movies, setMovies] = useState(moviesDataJSON)

    const addNewMovie = newMovie => {
        const moviesCopy = [...movies]          // Dado que unshift NO RETORNA UN NUEVO ARRAY es necesario sacar copia       
        moviesCopy.unshift(newMovie)            // Manipular copia (no usar retorno, no retorna un nuevo array, NOOOO)
        setMovies(moviesCopy)                   // Actualizar con copia
    }

    return (
        <div>
            <NewMovieForm addNewMovie={addNewMovie} />

            {
                movies.map(movie => {
                    return <MovieCard key={movie._id} movie={movie} />
                })
            }
        </div>
    )
}

export default MovieList