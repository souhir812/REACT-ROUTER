import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies,titre,rate}) {
  return (
    <div style={{margin:"auto",paddingTop:"10px", display:"flex",justifyContent:"space-around",flexWrap:"wrap",alignItems:"center"}}>
       {movies.filter((movie)=>
       movie.title.toLowerCase().trim().
       includes(titre.toLowerCase())&& movie.rate>=rate).
       map((movie,i) =>(<MovieCard movie={movie} key={i} />))} 
    </div>
  )
}

export default MovieList;