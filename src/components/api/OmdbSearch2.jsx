import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const OmdbSearch2 = () => {

    const [movies, setmovies] = useState([])
    const [searchParam, setsearchParam] = useState("Avatar")

    const searchMovie = async () => {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=f37c79df&s=${searchParam}`)
        setmovies(res.data.Search)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>OMDB SEARCH</h1>

            <button onClick={searchMovie}>SEARCH</button>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "20px" }}>
                {
                    movies.map((movie) => {
                        return (
                            <div key={movie.imdbID} style={{ border: "1px solid gray", padding: "10px" }}>
                                <img
                                    src={movie.Poster}
                                    alt=""
                                    style={{ height: "200px", width: "100%" }}
                                />
                                <h4>{movie.Title}</h4>
                                <p>{movie.Year}</p>

                                <Link to={`/moviedetail/${movie.imdbID}`}>
                                    <button>DETAIL</button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
