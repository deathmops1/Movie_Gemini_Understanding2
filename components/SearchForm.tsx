import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchMovies } from "./api";
import { Movie } from "./types";
import { MovieList } from "./MovieList";
import { SearchForm } from "./SearchForm";

export const SearchFor = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, error } = useQuery("movies", () => fetchMovies(searchTerm));

  return (
    <div>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <MovieList movies={data.Search} />}
    </div>
  );
};

