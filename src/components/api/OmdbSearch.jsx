import axios from 'axios'
import React, { useState } from 'react'

export const OmdbSearch = () => {

    const [movies, setmovies] = useState([])
    const [searchParam, setsearchParam] = useState("Iron Man")
    const searchMovie = async()=>{

        const res = await axios.get("https://www.omdbapi.com/?apikey=f37c79df&s=Avatar")
        //const res = await axios.get(`https://www.omdbapi.com/?apikey=9d57be0b&s=${searchParam}`)
        console.log(res) 
        console.log(res.data)
        setmovies(res.data.Search)

    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>OMDB SEARCH</h1>
        <button onClick={()=>{searchMovie()}}>SEARCH</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>IMDB ID</th>
                    <th>TITLE</th>
                    <th>YEAR</th>
                    <th>POSTER</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie)=>{
                        return<tr>
                            <td>{movie.imdbID}</td>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>
                                <img src={movie.Poster} style={{height:"150px",width:"150px"}}></img>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>  
  )
}