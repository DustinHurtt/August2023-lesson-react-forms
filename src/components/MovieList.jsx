// src/components/MovieList.jsx

import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";


function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [firstLetter, setFirstLetter] = useState("");


  const addNewMovie = (newMovie) => {
    // Create a new array
    const updatedMovies = [newMovie, ...movies];
    // const updatedMoviesData = [newMovie, ...moviesData]
   
    setMovies(updatedMovies);
    // setMoviesData(updatedMoviesData)
  };

  const filterMovieList = (str) => {  
    setFirstLetter(str);
  };

  let filtered = firstLetter ? [...movies].filter((movie) => movie.title[0].toLowerCase() === firstLetter.toLowerCase()) : movies
  
  return (
    <div>
      <h2>Movie List</h2>
      <FilterMovies filterMovies={filterMovieList} firstLetter={firstLetter} />
      <AddMovie addMovie={addNewMovie} />
      {
        filtered.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })
      }
    </div>
  );
}

export default MovieList;
