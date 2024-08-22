import React, { useState, useEffect } from "react";
import MovieCard from "./assets/components/MovieCard";
import SearchIcon from "./assets/search.svg";
import "./App.css";
const api_url = "http://www.omdbapi.com?apikey=e31df4fb";

// const movier = {
//   Poster: "N/A",
//   Title: "Amazing Spiderman Syndrome",
//   Type: "movie",
//   Year: "2012",
//   imdbID: "tt2586634",
// }
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };

  // var [a, b] = useState(74);
  // const [c, d] = useState(true);
  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input
            placeholder="search for the movies"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => {
              searchMovies(searchTerm);
            }}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>NO movies found</h2>
          </div>
        )}
      </div>
      {/* {/* <div className="w-full h-screen bg-zinc-900 text-white p5">
        <h1>{a}</h1>
        <h1>{a === false ? "hello" : "hi"}</h1>
        <button
          onClick={() => {
            b(a + 1);
          }}
          onMouseEnter={() => {
            d(!c);
          }}
          className="px-3 py-1 bg-green-500"
        >
          {send}
        </button> 
      </div> */}
    </>
  );
}

export default App;
