import { Movie } from "./types";

export const MovieList = ({ movies }: { movies: Movie[] }) => {
    return (
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <a href={`/movie/${movie.imdbID}`}>{movie.Title}</a>
          </li>
        ))}
      </ul>
    );
  };

export default MovieList;