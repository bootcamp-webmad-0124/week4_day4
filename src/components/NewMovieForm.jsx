import { useState } from "react";

const NewMovieForm = ({ addNewMovie }) => {

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [IMDBRating, setIMDBRating] = useState(5);
    const [hasOscars, setHasOscars] = useState(false);

    const handleTitleChange = event => setTitle(event.target.value)
    const handleDirectorChange = event => setDirector(event.target.value)
    const handleRatingChange = event => setIMDBRating(event.target.value)
    const handleOscarsChange = event => setHasOscars(event.target.checked)


    const handleFormSubmit = event => {
        event.preventDefault()          // anula el envío

        const newMovie = {
            director: director,
            title: title,
            IMDBRating: IMDBRating,
            hasOscars: hasOscars
        }

        addNewMovie(newMovie)
    }

    return (

        <div className="AddMovie">

            <h4>Nueva película</h4>

            <form onSubmit={handleFormSubmit}>

                <label>
                    Título
                    <input type="text" value={title} onChange={handleTitleChange} />
                </label>

                <label>
                    Director
                    <input type="text" value={director} onChange={handleDirectorChange} />
                </label>

                <label>
                    Rating
                    <input type="number" value={IMDBRating} onChange={handleRatingChange} />
                </label>

                <label>
                    ¿Ganó oscar?
                    <input type="checkbox" checked={hasOscars} onChange={handleOscarsChange} />
                </label>

                <input type="submit" value="CREAR PELÍCULA" />
            </form>
        </div>

    )
}

export default NewMovieForm