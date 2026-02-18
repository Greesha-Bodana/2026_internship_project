import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {

    const { imdbid } = useParams()
    const [movie, setmovie] = useState({})

    useEffect(() => {

    const fetchMovieDetail = async () => {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=f37c79df&i=${imdbid}`)
        setmovie(res.data)
    }
    fetchMovieDetail()
}, [imdbid])


    return (
        <div style={{ textAlign: "center" }}>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt="" height="300" />
            <p><b>Year:</b> {movie.Year}</p>
        </div>
    )
}
