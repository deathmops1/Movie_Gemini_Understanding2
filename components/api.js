import axios from "axios";

const API_KEY = "d9793288";

const fetchMovies = (searchTerm) => {
  return axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
};

const fetchMovie = (id) => {
  return axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
};

export { fetchMovies, fetchMovie };