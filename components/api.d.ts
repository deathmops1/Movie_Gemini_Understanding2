export declare function fetchMovies(searchTerm: string): Promise<{
    Search: Movie[];
  }>;
  
  declare function fetchMovie(id: string): Promise<Movie>;
  
  interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }
  export {};