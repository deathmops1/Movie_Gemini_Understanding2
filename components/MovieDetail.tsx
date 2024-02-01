import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMovies } from "./api.js";
import { Movie } from "./types";

const MovieDetail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery("movie", () => fetchMovies(id));

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>{data.Title}</div>}
    </div>
  );
};

export default MovieDetail;